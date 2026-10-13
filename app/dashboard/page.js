'use client';

import { useState, useEffect, Suspense, useId } from 'react';
import { useSearchParams } from 'next/navigation';
import SummaryCard from '../../components/SummaryCard';
import FindingsTable from '../../components/FindingsTable';
import ScanStatus from '../../components/ScanStatus';
import EmptyState from '../../components/EmptyState';
import { DEMO_ROUTES } from '../../lib/scan/scanTypes';
import { normalizeAxeResults } from '../../lib/scan/normalizeResults';
import { exportScanAsJSON, exportScanAsCSV, triggerDownload } from '../../lib/report/exportReport';

const STORAGE_KEY_RECENT = 'accesslab_recent_scans_v1';

function DashboardContent() {
  const searchParams = useSearchParams();
  const initialTarget = searchParams.get('target') || DEMO_ROUTES[0].path;

  const [scanMode, setScanMode] = useState('fixture'); // 'fixture' | 'live'
  const [liveUrl, setLiveUrl] = useState('https://example.com');
  const [selectedTarget, setSelectedTarget] = useState(initialTarget);
  const [scanStatus, setScanStatus] = useState('idle'); // 'idle' | 'running' | 'completed' | 'failed'
  const [currentScan, setCurrentScan] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentScans, setRecentScans] = useState([]);

  const targetSelectId = useId();

  // Load recent scans from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RECENT);
      if (saved) {
        const parsed = JSON.parse(saved);
        setRecentScans(parsed);
        // Default to most recent scan if available and no query target was provided
        if (!searchParams.get('target') && parsed.length > 0) {
          setCurrentScan(parsed[0]);
          setSelectedTarget(parsed[0].pageUrl);
          setScanStatus('completed');
        }
      }
    } catch (e) {
      console.warn('Failed to load recent scans:', e);
    }
  }, [searchParams]);

  // If search param specifies target and we don't have current scan, run or select it
  useEffect(() => {
    const urlTarget = searchParams.get('target');
    if (urlTarget) {
      setSelectedTarget(urlTarget);
      setScanMode('fixture');
    }
  }, [searchParams]);

  const runScan = async (targetToScan) => {
    const target = targetToScan || selectedTarget;
    setScanStatus('running');
    setErrorMessage('');

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetPath: target }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonErr) {
        throw new Error(`Server returned HTTP ${response.status} (${response.statusText || 'Unable to parse response'}).`);
      }

      if (!response.ok) {
        throw new Error(data?.error || `Scan failed with status ${response.status}.`);
      }

      setCurrentScan(data);
      setScanStatus('completed');

      // Update recent scans list in localStorage
      setRecentScans((prev) => {
        const filtered = prev.filter((s) => s.id !== data.id && s.pageUrl !== data.pageUrl);
        const updated = [data, ...filtered].slice(0, 5); // Keep last 5
        try {
          localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(updated));
        } catch (e) {}
        return updated;
      });
    } catch (err) {
      console.error('Scan error:', err);
      setScanStatus('failed');
      setErrorMessage(err.message || 'Scan encountered an error.');
    }
  };

  const runLiveScan = async (urlToScan) => {
    const rawUrl = (urlToScan || liveUrl || '').trim();
    if (!rawUrl) {
      setErrorMessage('Please enter a valid website URL.');
      setScanStatus('failed');
      return;
    }

    let validUrl = rawUrl;
    if (!validUrl.startsWith('http://') && !validUrl.startsWith('https://')) {
      validUrl = `https://${validUrl}`;
      setLiveUrl(validUrl);
    }

    setScanStatus('running');
    setErrorMessage('');

    let iframe = null;

    try {
      const response = await fetch('/api/fetch-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: validUrl }),
      });

      let resData;
      try {
        resData = await response.json();
      } catch (jsonErr) {
        throw new Error(`Server returned HTTP ${response.status} (${response.statusText || 'Unable to load page'}).`);
      }

      if (!response.ok) {
        throw new Error(resData?.error || 'Failed to fetch external website.');
      }

      // Create an offscreen sandboxed iframe for authentic axe-core execution in the browser
      iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.left = '-9999px';
      iframe.style.top = '0';
      iframe.style.width = '1280px';
      iframe.style.height = '800px';
      iframe.style.opacity = '0';
      iframe.style.pointerEvents = 'none';
      document.body.appendChild(iframe);

      await new Promise((resolve) => {
        iframe.onload = resolve;
        iframe.srcdoc = resData.html;
        setTimeout(resolve, 2000);
      });

      const win = iframe.contentWindow;
      const iframeDoc = iframe.contentDocument || win?.document;
      if (!win || !iframeDoc) {
        throw new Error('Could not access document frame of fetched website.');
      }

      const axeModule = await import('axe-core');
      const axe = axeModule.default || axeModule;

      // Inject axe into the iframe's realm so document & window.Node belong to the same frame
      if (!win.axe) {
        try {
          win.eval(axe.source);
        } catch (evalErr) {
          const script = iframeDoc.createElement('script');
          script.textContent = axe.source;
          (iframeDoc.head || iframeDoc.documentElement || iframeDoc.body).appendChild(script);
        }
      }

      const activeAxe = win.axe || axe;
      const scanOptions = {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
        },
      };

      // In axe-core, pass options as the first argument without undefined
      const axeResults = await activeAxe.run(scanOptions);

      let hostName = validUrl;
      try {
        hostName = new URL(validUrl).hostname;
      } catch {}

      const normalized = normalizeAxeResults(axeResults, {
        pageUrl: validUrl,
        pageName: hostName,
        scanId: `scan-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      });

      setCurrentScan(normalized);
      setScanStatus('completed');

      setRecentScans((prev) => {
        const filtered = prev.filter((s) => s.id !== normalized.id && s.pageUrl !== normalized.pageUrl);
        const updated = [normalized, ...filtered].slice(0, 5);
        try {
          localStorage.setItem(STORAGE_KEY_RECENT, JSON.stringify(updated));
        } catch (e) {}
        return updated;
      });
    } catch (err) {
      console.error('Live scan error:', err);
      setScanStatus('failed');
      setErrorMessage(err.message || 'Audit encountered an error while scanning the target website.');
    } finally {
      if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }
  };

  const handleExportJSON = () => {
    if (!currentScan) return;
    const blob = exportScanAsJSON(currentScan);
    const filename = `accesslab-${currentScan.pageName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}-${Date.now()}.json`;
    triggerDownload(blob, filename);
  };

  const handleExportCSV = () => {
    if (!currentScan) return;
    const blob = exportScanAsCSV(currentScan);
    const filename = `accesslab-${currentScan.pageName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}-${Date.now()}.csv`;
    triggerDownload(blob, filename);
  };

  const selectedRouteObj = DEMO_ROUTES.find((r) => r.path === selectedTarget) || DEMO_ROUTES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-neutral">Auditing Engine</span>
          <span className="badge badge-minor">Real axe-core Execution</span>
        </div>
        <h1>Audit Dashboard</h1>
        <p style={{ maxWidth: '850px', fontSize: '1.05rem' }}>
          Execute authentic axe-core accessibility audits against local WCAG test fixtures or any live deployed website URL. Results preserve exact engine severities, rule IDs, and failure summaries without synthetic inflation.
        </p>
      </header>

      {/* Scan Control Center Card */}
      <section className="card" aria-labelledby="controls-heading" style={{ borderTop: '4px solid var(--accent-primary)' }}>
        <h2 id="controls-heading" style={{ fontSize: '1.25rem', marginTop: 0 }}>
          Scan Launcher
        </h2>

        {/* Audit Mode Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <button
            type="button"
            className={`btn btn-sm ${scanMode === 'fixture' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setScanMode('fixture')}
            aria-pressed={scanMode === 'fixture'}
          >
            🧪 Built-in Test Fixtures
          </button>
          <button
            type="button"
            className={`btn btn-sm ${scanMode === 'live' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setScanMode('live')}
            aria-pressed={scanMode === 'live'}
          >
            🌐 Live Deployed Website
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {scanMode === 'fixture' ? (
            <div>
              <label htmlFor={targetSelectId} style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Select Local Demo Fixture to Audit:
              </label>
              <select
                id={targetSelectId}
                value={selectedTarget}
                onChange={(e) => setSelectedTarget(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '650px',
                  padding: '0.625rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-strong)',
                  fontSize: '0.95rem',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                }}
              >
                {DEMO_ROUTES.map((route) => (
                  <option key={route.path} value={route.path}>
                    {route.name} ({route.category})
                  </option>
                ))}
              </select>

              <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', maxWidth: '650px', fontSize: '0.88rem', marginTop: '0.75rem' }}>
                <p style={{ margin: 0 }}>
                  <strong>Fixture Scope:</strong> {selectedRouteObj.description}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="live-url-input" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Enter Live Deployed Website URL (e.g. Vercel, Netlify, or custom domain):
              </label>
              <input
                id="live-url-input"
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://my-deployed-app.vercel.app"
                style={{
                  width: '100%',
                  maxWidth: '650px',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-strong)',
                  fontSize: '0.98rem',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              />
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Quick Presets:</span>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.2rem 0.6rem', fontSize: '0.78rem', minHeight: '30px', borderRadius: 'var(--radius-full)' }}
                  onClick={() => setLiveUrl('https://useastra.in/hiring')}
                >
                  useastra.in/hiring
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.2rem 0.6rem', fontSize: '0.78rem', minHeight: '30px', borderRadius: 'var(--radius-full)' }}
                  onClick={() => setLiveUrl('https://example.com')}
                >
                  example.com
                </button>
              </div>
              <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', maxWidth: '650px', fontSize: '0.88rem', marginTop: '0.75rem', borderLeft: '3px solid var(--accent-primary)' }}>
                <p style={{ margin: 0 }}>
                  <strong>Live Audit:</strong> Fetches live HTML and runs authentic axe-core (WCAG 2.1/2.2 AA) rules inside an isolated browser document sandbox.
                </p>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              disabled={scanStatus === 'running'}
              onClick={() => (scanMode === 'fixture' ? runScan(selectedTarget) : runLiveScan(liveUrl))}
            >
              {scanStatus === 'running' ? (
                <>
                  <span aria-hidden="true">⏳</span> Running axe-core Scan...
                </>
              ) : (
                <>
                  <span aria-hidden="true">⚡</span> Run axe-core Scan
                </>
              )}
            </button>

            {currentScan && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" onClick={handleExportJSON} className="btn btn-secondary btn-sm">
                  Export JSON
                </button>
                <button type="button" onClick={handleExportCSV} className="btn btn-secondary btn-sm">
                  Export CSV
                </button>
                <button type="button" onClick={() => window.print()} className="btn btn-secondary btn-sm">
                  Print Report
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Scan Live Status */}
      <ScanStatus
        status={scanStatus}
        error={errorMessage}
        targetName={scanMode === 'live' ? liveUrl : selectedRouteObj.name}
      />

      {/* Summary Cards */}
      {currentScan && (
        <section aria-labelledby="summary-heading">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            <h2 id="summary-heading" style={{ margin: 0 }}>
              Audit Summary: {currentScan.pageName}
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Scanned on {new Date(currentScan.scannedAt).toLocaleString()} • Engine: {currentScan.engine} v{currentScan.engineVersion}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: '1rem' }}>
            <SummaryCard
              title="Violations"
              value={currentScan.summary.totalViolations}
              description="Definitive automated failures"
              badgeVariant={currentScan.summary.totalViolations > 0 ? 'critical' : 'passes'}
            />
            <SummaryCard
              title="Critical"
              value={currentScan.summary.criticalCount}
              description="Highest user barrier"
              badgeVariant="critical"
            />
            <SummaryCard
              title="Serious"
              value={currentScan.summary.seriousCount}
              description="Severe accessibility friction"
              badgeVariant="serious"
            />
            <SummaryCard
              title="Moderate"
              value={currentScan.summary.moderateCount}
              description="Intermediate barriers"
              badgeVariant="moderate"
            />
            <SummaryCard
              title="Needs Review"
              value={currentScan.summary.needsReviewCount}
              description="Incomplete items requiring human eye"
              badgeVariant="incomplete"
            />
            <SummaryCard
              title="Passes"
              value={currentScan.summary.passesCount}
              description="Evaluated rules passing"
              badgeVariant="passes"
            />
          </div>
        </section>
      )}

      {/* Findings Table or Empty State */}
      {currentScan ? (
        <section aria-labelledby="findings-heading">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <h2 id="findings-heading" style={{ margin: 0 }}>
              Detailed Finding Breakdown
            </h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Inspecting DOM selectors, failure summaries, and remediation code
            </span>
          </div>

          <FindingsTable
            violations={currentScan.violations}
            incomplete={currentScan.incomplete}
          />
        </section>
      ) : (
        <EmptyState
          title="Ready to Scan"
          message="Select any of the local demo fixtures above to trigger a headless browser scan powered by axe-core."
          actionText="Run Audit on Selected Fixture"
          onAction={() => runScan(selectedTarget)}
        />
      )}

      {/* Recent Scans Session History */}
      {recentScans.length > 0 && (
        <section aria-labelledby="history-heading" className="card" style={{ marginTop: '1rem' }}>
          <h2 id="history-heading" style={{ fontSize: '1.15rem', marginTop: 0 }}>
            Recent Audits in Session
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {recentScans.map((scan) => (
              <div
                key={scan.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{scan.pageName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {new Date(scan.scannedAt).toLocaleTimeString()} • {scan.summary.totalViolations} violations • {scan.summary.needsReviewCount} needs review
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setCurrentScan(scan);
                      setSelectedTarget(scan.pageUrl);
                      setScanStatus('completed');
                    }}
                  >
                    View Findings
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => runScan(scan.pageUrl)}
                  >
                    Re-scan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="callout callout-info">Loading Audit Dashboard...</div>}>
      <DashboardContent />
    </Suspense>
  );
}

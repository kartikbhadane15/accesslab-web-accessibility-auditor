'use client';

import { useState, useEffect, Suspense, useId } from 'react';
import { useSearchParams } from 'next/navigation';
import SummaryCard from '../../components/SummaryCard';
import FindingsTable from '../../components/FindingsTable';
import ScanStatus from '../../components/ScanStatus';
import EmptyState from '../../components/EmptyState';
import { DEMO_ROUTES } from '../../lib/scan/scanTypes';
import { exportScanAsJSON, exportScanAsCSV, triggerDownload } from '../../lib/report/exportReport';

const STORAGE_KEY_RECENT = 'accesslab_recent_scans_v1';

function DashboardContent() {
  const searchParams = useSearchParams();
  const initialTarget = searchParams.get('target') || DEMO_ROUTES[0].path;

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to complete scan.');
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
          Select an authorized demo test fixture to execute a real axe-core scan in a headless Chromium browser. Results preserve exact engine severities, rule IDs, and failure summaries without synthetic inflation.
        </p>
      </header>

      {/* Scan Control Center Card */}
      <section className="card" aria-labelledby="controls-heading" style={{ borderTop: '4px solid var(--accent-primary)' }}>
        <h2 id="controls-heading" style={{ fontSize: '1.25rem', marginTop: 0 }}>
          Scan Launcher
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', maxWidth: '650px', fontSize: '0.88rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Fixture Scope:</strong> {selectedRouteObj.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              disabled={scanStatus === 'running'}
              onClick={() => runScan(selectedTarget)}
            >
              {scanStatus === 'running' ? (
                <>
                  <span aria-hidden="true">⏳</span> Scanning with Chromium...
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
        targetName={selectedRouteObj.name}
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            <SummaryCard
              title="Violations"
              value={currentScan.summary.totalViolations}
              description="Definitive automated failures"
              badgeVariant={currentScan.summary.totalViolations > 0 ? 'critical' : 'minor'}
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
              badgeVariant="minor"
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

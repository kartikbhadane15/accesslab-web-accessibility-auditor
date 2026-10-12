'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ContentDemoContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'improved' ? 'improved' : 'problem';
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    if (urlMode === 'improved' || urlMode === 'problem') {
      setMode(urlMode);
    }
  }, [searchParams]);

  // Inline SVG chart for demonstration
  const chartSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="160" viewBox="0 0 400 160"><rect width="400" height="160" fill="%23f1f5f9" rx="8"/><text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="bold" fill="%231e293b">Accessibility Audit Score Progression</text><rect x="40" y="90" width="60" height="50" fill="%2394a3b8"/><text x="45" y="80" font-family="sans-serif" font-size="12" fill="%23475569">2024 (42%)</text><rect x="140" y="60" width="60" height="80" fill="%233b82f6"/><text x="145" y="50" font-family="sans-serif" font-size="12" fill="%231e40af">2025 (65%)</text><rect x="240" y="35" width="60" height="105" fill="%2316a34a"/><text x="245" y="25" font-family="sans-serif" font-size="12" fill="%2315803d">2026 (88%)</text></svg>`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Link href="/demos" className="badge badge-neutral" style={{ textDecoration: 'none' }}>
            ← Back to Demo Library
          </Link>
          <span className="badge badge-serious">Content & Media</span>
        </div>
        <h1>Content Structure & Media Demo</h1>
        <p style={{ maxWidth: '800px', fontSize: '1.05rem' }}>
          Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.
        </p>
      </header>

      {/* Mode Switcher */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Selected Fixture Mode:
          </span>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.35rem' }}>
            <button
              type="button"
              className={`btn btn-sm ${mode === 'problem' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMode('problem')}
              aria-pressed={mode === 'problem'}
            >
              ⚠ Flawed Test Fixture
            </button>
            <button
              type="button"
              className={`btn btn-sm ${mode === 'improved' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setMode('improved')}
              aria-pressed={mode === 'improved'}
            >
              ✓ Remediated Semantic Fixture
            </button>
          </div>
        </div>

        <div>
          <Link
            href={`/dashboard?target=${encodeURIComponent(`/demos/content?mode=${mode}`)}`}
            className="btn btn-secondary btn-sm"
          >
            Audit this fixture with axe-core →
          </Link>
        </div>
      </div>

      {/* Fixture Display */}
      {mode === 'problem' ? (
        <section
          className="card"
          aria-labelledby="flawed-content-heading"
          style={{ border: '2px solid #ef4444', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #fee2e2', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-critical">Deliberately Flawed Fixture</span>
              <h2 id="flawed-content-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Content Hierarchy with Severe Alt and Structural Defects
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#b91c1c', fontWeight: 600 }}>
              Test Target: /demos/content?mode=problem
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Flawed 1: Skipped heading levels (H1 jumps to H4 and H6) */}
            <div style={{ background: '#fef2f2', border: '1px solid #fee2e2', padding: '1rem', borderRadius: '6px' }}>
              <span className="badge badge-serious">Skipped Heading Hierarchy</span>
              {/* Note: This is an intentional demonstration of broken hierarchy */}
              <h4 style={{ fontSize: '1.25rem', color: '#991b1b', marginTop: '0.5rem' }}>
                H4: Executive Summary (Direct child after H1!)
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#7f1d1d' }}>
                This section skips from H1 directly to H4, breaking the heading tree for screen reader rotor navigation.
              </p>
              <h6 style={{ fontSize: '1rem', color: '#991b1b', marginTop: '0.5rem' }}>
                H6: Deeply Nested Subheading (Skipping H5)
              </h6>
            </div>

            {/* Flawed 2: Images without alt and bad alt */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: '#f8fafc', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                <span className="badge badge-critical">Image Missing Alt Attribute</span>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.35rem 0' }}>
                  axe-core triggers rule: <code>image-alt</code>
                </p>
                {/* Deliberately missing alt attribute for testing */}
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img
                  src={chartSvg}
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{ background: '#f8fafc', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                <span className="badge badge-serious">Uninformative Alt=&quot;image&quot;</span>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.35rem 0' }}>
                  Note: axe-core flags alt=&quot;image&quot; as redundant or suspicious!
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={chartSvg}
                  alt="image"
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Flawed 3: Low-contrast text */}
            <div style={{ background: '#ffffff', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
              <span className="badge badge-serious">Insufficient Color Contrast (2.5:1)</span>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0.5rem 0 0 0' }}>
                This paragraph text is styled with #94a3b8 against a #ffffff background. It fails the WCAG 1.4.3 AA minimum requirement of 4.5:1, rendering it nearly unreadable for users with low vision or when viewing under sunlight.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="card"
          aria-labelledby="improved-content-heading"
          style={{ border: '2px solid #22c55e', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #dcfce7', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-minor">Remediated Semantic Fixture</span>
              <h2 id="improved-content-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Semantic Content with Descriptive Alternatives and High Contrast
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>
              Test Target: /demos/content?mode=improved
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Improved 1: Strict logical heading hierarchy */}
            <article style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginTop: 0 }}>
                H3: Executive Summary of Accessibility Progress
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#334155' }}>
                This section follows logical hierarchy without skipping heading ranks, providing a clear outline for screen readers and search bots.
              </p>

              <h4 style={{ fontSize: '1rem', color: '#1e293b', marginTop: '0.75rem' }}>
                H4: Remediation Milestones
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>
                Quarterly audits in 2026 achieved 88% overall conformance across critical user flows.
              </p>
            </article>

            {/* Improved 2: Rich, descriptive alternative text */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: '#f0fdf4', padding: '1rem', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
                <span className="badge badge-minor">Informative Alt Text</span>
                <p style={{ fontSize: '0.8rem', color: '#166534', margin: '0.35rem 0 0.75rem 0' }}>
                  Conveys the exact data and conclusion of the visual chart.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={chartSvg}
                  alt="Bar chart showing accessibility audit compliance score rising from 42% in 2024 to 65% in 2025 and 88% in 2026."
                  style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              <div style={{ background: '#f0fdf4', padding: '1rem', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
                <span className="badge badge-minor">Decorative Media</span>
                <p style={{ fontSize: '0.8rem', color: '#166534', margin: '0.35rem 0 0.75rem 0' }}>
                  Marked with empty <code>alt=&quot;&quot;</code> and <code>aria-hidden=&quot;true&quot;</code> to prevent chatter.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#fff', borderRadius: '4px' }}>
                  <span aria-hidden="true" style={{ fontSize: '2rem' }}>📊</span>
                  <div>
                    <strong>Decorative Metric Icon</strong>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569' }}>Ignored cleanly by screen readers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Improved 3: High contrast text */}
            <div style={{ background: '#ffffff', padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
              <span className="badge badge-minor">High-Contrast Text (15.3:1 Ratio)</span>
              <p style={{ color: '#0f172a', fontSize: '0.95rem', margin: '0.5rem 0 0 0', fontWeight: 500 }}>
                This paragraph text is styled with #0f172a on #ffffff, providing an exceptional 15.3:1 contrast ratio that far exceeds the WCAG 1.4.3 AAA requirement of 7:1. It ensures effortless readability for all users under diverse lighting conditions.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Educational Analysis Section */}
      <section className="card" aria-labelledby="content-analysis-heading">
        <h2 id="content-analysis-heading" style={{ fontSize: '1.25rem', marginTop: 0 }}>
          Accessibility Engineering Analysis: Content & Media
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-critical-text)' }}>
              1. The Alt Text Quality Blind Spot
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Automated scanners only check if the <code>alt</code> attribute exists and is non-empty. An automated tool cannot know if an alt text describes an invoice, a logo, or a funny meme accurately. Human editorial judgment is required to evaluate equivalent intent.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-serious-text)' }}>
              2. Logical Heading Tree
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Blind users do not read web pages linearly from top to bottom. Over 70% of screen reader users jump across heading levels to understand document structure. Skipping from <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code> confuses mental models and leaves users wondering if sections were lost.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-moderate-text)' }}>
              3. Contrast Calculations
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Normal text requires at least 4.5:1 contrast against its background. When elements overlay background images, gradients, or have CSS filters, axe-core marks them as <code>incomplete</code> (needs manual review), because exact pixel contrast cannot be statically guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContentDemoPage() {
  return (
    <Suspense fallback={<div className="callout callout-info">Loading Content Demo...</div>}>
      <ContentDemoContent />
    </Suspense>
  );
}

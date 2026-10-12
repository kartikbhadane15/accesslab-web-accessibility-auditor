'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function NavigationDemoContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'improved' ? 'improved' : 'problem';
  const [mode, setMode] = useState(initialMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    const urlMode = searchParams.get('mode');
    if (urlMode === 'improved' || urlMode === 'problem') {
      setMode(urlMode);
    }
  }, [searchParams]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      setAnnouncement('Navigation sub-menu closed with Escape key.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Link href="/demos" className="badge badge-neutral" style={{ textDecoration: 'none' }}>
            ← Back to Demo Library
          </Link>
          <span className="badge badge-serious">Keyboard & Navigation</span>
        </div>
        <h1>Navigation Accessibility Demo</h1>
        <p style={{ maxWidth: '800px', fontSize: '1.05rem' }}>
          Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.
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
            href={`/dashboard?target=${encodeURIComponent(`/demos/navigation?mode=${mode}`)}`}
            className="btn btn-secondary btn-sm"
          >
            Audit this fixture with axe-core →
          </Link>
        </div>
      </div>

      {announcement && (
        <div className="callout callout-info" role="status" aria-live="polite">
          <p style={{ margin: 0, fontSize: '0.9rem' }}>{announcement}</p>
        </div>
      )}

      {/* Fixture Display */}
      {mode === 'problem' ? (
        <section
          className="card"
          aria-labelledby="flawed-nav-heading"
          style={{ border: '2px solid #ef4444', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #fee2e2', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-critical">Deliberately Flawed Fixture</span>
              <h2 id="flawed-nav-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Navigation with Inoperable Focus and Keyboard Traps
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#b91c1c', fontWeight: 600 }}>
              Test Target: /demos/navigation?mode=problem
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Flawed Nav Bar */}
            <div
              style={{
                background: '#1e293b',
                color: '#fff',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontWeight: 700 }}>InaccessibleSite</span>

              {/* Pseudo link with no href: completely skipped by keyboard Tab */}
              <a
                onClick={() => setAnnouncement('Clicked pseudo link')}
                style={{
                  color: '#93c5fd',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  outline: 'none',
                }}
              >
                Docs (No href attribute — Unreachable by Tab)
              </a>

              {/* Hover-only dropdown: keyboard users cannot open it */}
              <div
                className="flawed-hover-menu"
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <span
                  style={{
                    color: '#f8fafc',
                    cursor: 'pointer',
                    padding: '0.25rem 0.5rem',
                    border: '1px dashed #64748b',
                  }}
                >
                  Products ▾ (Hover-only &lt;div&gt;)
                </span>
                <div
                  style={{
                    display: 'none',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: '#334155',
                    minWidth: '160px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                    padding: '0.5rem',
                  }}
                >
                  <a href="#prod-1" style={{ display: 'block', color: '#fff', outline: 'none' }}>Auditor Pro</a>
                  <a href="#prod-2" style={{ display: 'block', color: '#fff', outline: 'none' }}>Scanner Cloud</a>
                </div>
              </div>

              {/* Suppressed focus outline button */}
              <button
                type="button"
                style={{
                  background: '#3b82f6',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  outline: 'none',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                Sign In (Focus outline: none)
              </button>
            </div>

            {/* Ambiguous links section */}
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '1rem', marginTop: 0, color: '#991b1b' }}>
                Ambiguous Link Purpose (Violates WCAG 2.4.4)
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#7f1d1d' }}>
                Our 2026 accessibility audit report has arrived. To learn more about our testing findings,{' '}
                <a href="#audit-report" style={{ color: '#2563eb', outline: 'none' }}>
                  click here
                </a>
                . Furthermore, for updated regulatory standards,{' '}
                <a href="#regulations" style={{ color: '#2563eb', outline: 'none' }}>
                  read more
                </a>
                .
              </p>
              <p style={{ fontSize: '0.8rem', color: '#991b1b', margin: 0 }}>
                Screen reader users frequently press <kbd>Caps Lock + F7</kbd> or <kbd>Insert + F7</kbd> to listen to an alphabetical list of links. Hearing &ldquo;Click here&rdquo; and &ldquo;Read more&rdquo; out of context leaves users completely disoriented.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section
          className="card"
          aria-labelledby="improved-nav-heading"
          style={{ border: '2px solid #22c55e', background: '#fff' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid #dcfce7', paddingBottom: '0.75rem' }}>
            <div>
              <span className="badge badge-minor">Remediated Semantic Fixture</span>
              <h2 id="improved-nav-heading" style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>
                Navigation Engineered with Focus Rings and ARIA Disclosures
              </h2>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>
              Test Target: /demos/navigation?mode=improved
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Improved Accessible Nav Bar */}
            <nav
              aria-label="Demo Secondary Navigation"
              style={{
                background: '#0f172a',
                color: '#fff',
                padding: '0.75rem 1.25rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontWeight: 700 }}>AccessiblePortal</span>

              <ul style={{ display: 'flex', listStyle: 'none', gap: '1.25rem', margin: 0, padding: 0, alignItems: 'center', flexWrap: 'wrap' }}>
                <li>
                  <Link
                    href="/methodology"
                    className="nav-link"
                    style={{ color: '#f8fafc', fontWeight: 600 }}
                  >
                    Documentation
                  </Link>
                </li>

                {/* Accessible Disclosure Dropdown */}
                <li style={{ position: 'relative' }} onKeyDown={handleKeyDown}>
                  <button
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="accessible-sub-menu"
                    aria-haspopup="true"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                      background: 'transparent',
                      color: '#f8fafc',
                      border: '1px solid #475569',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    Auditing Services
                    <span aria-hidden="true">{menuOpen ? '▴' : '▾'}</span>
                  </button>

                  {menuOpen && (
                    <ul
                      id="accessible-sub-menu"
                      style={{
                        position: 'absolute',
                        top: '120%',
                        left: 0,
                        background: '#1e293b',
                        border: '1px solid #475569',
                        borderRadius: '6px',
                        minWidth: '220px',
                        boxShadow: '0 10px 15px rgba(0,0,0,0.4)',
                        padding: '0.5rem',
                        listStyle: 'none',
                        zIndex: 50,
                      }}
                    >
                      <li>
                        <Link
                          href="/dashboard"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            display: 'block',
                            padding: '0.5rem 0.75rem',
                            color: '#f8fafc',
                            textDecoration: 'none',
                            borderRadius: '4px',
                          }}
                        >
                          Automated axe-core Scan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/checklist"
                          onClick={() => setMenuOpen(false)}
                          style={{
                            display: 'block',
                            padding: '0.5rem 0.75rem',
                            color: '#f8fafc',
                            textDecoration: 'none',
                            borderRadius: '4px',
                          }}
                        >
                          12-Point Manual Checklist
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setAnnouncement('Sign-in modal would open with trapped focus.')}
                  >
                    Sign In to Portal
                  </button>
                </li>
              </ul>
            </nav>

            {/* Clear Link Text */}
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1rem', borderRadius: '6px' }}>
              <h3 style={{ fontSize: '1rem', marginTop: 0, color: '#166534' }}>
                Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#14532d', margin: 0 }}>
                AccessLab has released its latest research findings. You can{' '}
                <Link href="/methodology" style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'underline' }}>
                  inspect the full WCAG 2.2 methodology and POUR principles report
                </Link>
                , or evaluate requirements using our{' '}
                <Link href="/checklist" style={{ color: '#1d4ed8', fontWeight: 600, textDecoration: 'underline' }}>
                  downloadable accessibility review checklist
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Educational Analysis Section */}
      <section className="card" aria-labelledby="nav-analysis-heading">
        <h2 id="nav-analysis-heading" style={{ fontSize: '1.25rem', marginTop: 0 }}>
          Accessibility Engineering Analysis: Navigation & Focus
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-critical-text)' }}>
              1. The Danger of outline: none
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Removing the default focus outline without an obvious custom replacement effectively blinds sighted keyboard navigators, switch users, and screen magnifier users. They cannot know which element currently holds focus. WCAG 2.4.7 (Focus Visible) and WCAG 2.4.11 (Focus Appearance) require strong, visible indicators.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-serious-text)' }}>
              2. Hover-Only Menus vs. ARIA Disclosure
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Hover-only CSS dropdowns are invisible to keyboard navigators. An accessible disclosure requires a button with <code>aria-expanded=&quot;true|false&quot;</code>, <code>aria-controls=&quot;id&quot;</code>, and keyboard support for <kbd>Enter</kbd>, <kbd>Space</kbd>, and <kbd>Escape</kbd>.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1rem', marginTop: 0, color: 'var(--severity-moderate-text)' }}>
              3. Descriptive Links vs. &ldquo;Click Here&rdquo;
            </h3>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function NavigationDemoPage() {
  return (
    <Suspense fallback={<div className="callout callout-info">Loading Navigation Demo...</div>}>
      <NavigationDemoContent />
    </Suspense>
  );
}

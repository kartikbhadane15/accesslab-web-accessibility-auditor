import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-badge-container">
          <span className="badge badge-neutral">Portfolio-Ready Developer Tool</span>
          <span className="badge badge-minor">WCAG 2.1 & 2.2 Aligned</span>
        </div>
        <h1 id="hero-heading" className="hero-title">
          Web Accessibility Auditing Grounded in Evidence
        </h1>
        <p className="hero-description">
          AccessLab helps frontend developers, QA engineers, and designers audit web pages using real axe-core scans, inspect DOM elements, reproduce accessibility barriers, and implement verified remediations.
        </p>

        <div className="hero-actions">
          <Link href="/dashboard" className="btn btn-primary">
            Launch Audit Dashboard
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/demos" className="btn btn-secondary">
            Explore Demo Fixtures
          </Link>
          <Link href="/checklist" className="btn btn-secondary">
            Manual Testing Checklist
          </Link>
        </div>
      </section>

      {/* Philosophy Callout: Automated vs Manual */}
      <section className="callout callout-info" aria-labelledby="philosophy-heading">
        <h2 id="philosophy-heading" style={{ fontSize: '1.15rem', marginTop: 0, marginBottom: '0.5rem' }}>
          Crucial Principle: Automated Testing vs. Manual Evaluation
        </h2>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>
          Automated auditing engines like axe-core are unmatched for finding syntax, DOM, color contrast, and ARIA violations rapidly. However, automated testing only discovers roughly <strong>30% to 40%</strong> of accessibility barriers. Screen reader reading order, cognitive clarity, touch gesture complexity, and accurate alternative text require human manual verification.
        </p>
      </section>

      {/* Sample Finding Card Preview */}
      <section className="preview-section" aria-labelledby="preview-heading">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 id="preview-heading">Sample Audit Finding Card</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Representative of findings produced during scans
          </span>
        </div>

        <div className="card" style={{ marginTop: '1rem', borderLeft: '4px solid var(--severity-critical-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <span className="badge badge-critical">Critical</span>
                <code style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>button-name</code>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Buttons must have discernible text</h3>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              <span className="badge badge-neutral">WCAG 4.1.2 (Level A)</span>
              <span className="badge badge-neutral">Section 508</span>
            </div>
          </div>

          <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            A button element has no text content, aria-label, or title. Assistive technologies such as screen readers announce this simply as &ldquo;button&rdquo;, leaving blind users with no way to deduce what activating it will do.
          </p>

          <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              AFFECTED ELEMENT (SAFELY ESCAPED)
            </div>
            <code style={{ color: 'var(--severity-critical-text)', wordBreak: 'break-all' }}>
              {'<button class="icon-search"><svg>...</svg></button>'}
            </code>
          </div>

          <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', marginBottom: '0.25rem' }}>
              RECOMMENDED REMEDIATION
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#14532d' }}>
              Add an explicit <code>aria-label=&quot;Search website&quot;</code> or embed a <code>&lt;span class=&quot;sr-only&quot;&gt;Search&lt;/span&gt;</code> element inside the button.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="features-section" aria-labelledby="features-heading">
        <h2 id="features-heading">Architecture & Core Capabilities</h2>
        <div className="features-grid">
          <div className="metric-card">
            <span className="metric-title">01 / Real Scans</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Real axe-core Execution</h3>
            <p className="metric-desc">
              Executes the battle-tested axe-core engine directly against local fixture pages. Preserves real rule IDs, impact severity, failure summaries, and WCAG tags without fabricated metrics.
            </p>
          </div>

          <div className="metric-card">
            <span className="metric-title">02 / Dual Fixtures</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Flawed vs. Fixed Demos</h3>
            <p className="metric-desc">
              Explore Forms, Navigation, and Content fixtures side-by-side. Understand why an inaccessible pattern breaks user experiences and compare with clean semantic markup.
            </p>
          </div>

          <div className="metric-card">
            <span className="metric-title">03 / Human Audit</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>12-Point Manual Checklist</h3>
            <p className="metric-desc">
              Interactive checklist covering keyboard trap checks, zoom reflow at 200%/400%, focus visibility, skip links, screen reader spot checks, and accessible names.
            </p>
          </div>

          <div className="metric-card">
            <span className="metric-title">04 / Reporting</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Comprehensive Export</h3>
            <p className="metric-desc">
              Export full audit artifacts as structured JSON, CSV, or printable reports with complete rule metadata, selectors, and remediation guidance for sprint backlogs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Demo Library — AccessLab',
  description: 'Interactive accessibility test fixtures for Forms, Navigation, and Content structure.',
};

export default function DemosDirectoryPage() {
  const demos = [
    {
      title: '01. Forms & Input Validation',
      path: '/demos/forms',
      description: 'Explore common form pitfalls: missing <label> associations, div-based submit buttons, unlinked error messages, and color-only required indicators.',
      issuesDemonstrated: [
        'Inputs relying exclusively on placeholder text',
        'Clickable <div> lacking keyboard handlers and role="button"',
        'Validation errors invisible to screen readers (no aria-describedby)',
        'Required fields communicated solely by red text',
      ],
      automatedDetection: 'axe-core readily detects missing labels, missing button roles/names, and duplicate IDs.',
      manualVerification: 'Human review is required to verify whether error instructions are actually helpful and clear.',
    },
    {
      title: '02. Navigation & Keyboard Operation',
      path: '/demos/navigation',
      description: 'Test keyboard interaction issues: suppressed focus outlines, non-focusable pseudo-links, hover-only dropdown menus, and unhelpful link text.',
      issuesDemonstrated: [
        'Suppressed focus rings via outline: none without replacement',
        'Pseudo-links (<a onclick="...">) missing href and tab stop',
        'CSS hover dropdowns inaccessible to Tab and screen readers',
        'Ambiguous link text like "Click here" lacking context',
      ],
      automatedDetection: 'axe-core detects links without names and invalid ARIA attributes.',
      manualVerification: 'Human testing with Tab, Shift+Tab, Escape, and Enter is mandatory to evaluate logical focus order and menus.',
    },
    {
      title: '03. Content Structure & Media Alternatives',
      path: '/demos/content',
      description: 'Inspect document structure and graphics: missing alt attributes, uninformative alt="image", skipped heading levels, and low color contrast.',
      issuesDemonstrated: [
        'Missing alt attributes resulting in screen readers announcing file URLs',
        'Generic alt="image" passing automated checks while failing human comprehension',
        'Skipped heading levels (<h1> directly to <h4>)',
        'Low-contrast text below WCAG AA 4.5:1 ratio',
      ],
      automatedDetection: 'axe-core detects missing alt, skipped headings, and mathematical color contrast.',
      manualVerification: 'A human must determine if alt text accurately conveys the image meaning and if heading hierarchy reflects page logic.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <span className="badge badge-neutral">Educational Test Suites</span>
        <h1 style={{ marginTop: '0.5rem' }}>Interactive Demo Library</h1>
        <p style={{ maxWidth: '800px', fontSize: '1.05rem' }}>
          AccessLab provides isolated, paired test fixtures demonstrating real-world accessibility barriers alongside verified accessible remediations. Use these fixtures to run automated scans, practice manual keyboard testing, and study code comparisons.
        </p>
      </header>

      <div className="callout callout-warning">
        <h2 style={{ fontSize: '1.05rem', margin: '0 0 0.25rem 0' }}>Notice: Contained Educational Fixtures</h2>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          The flawed fixtures contained within these demo pages are deliberately designed with intentional accessibility violations for auditing and educational analysis. The enclosing AccessLab platform remains strictly accessible.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {demos.map((demo) => (
          <article key={demo.path} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1.3rem', marginTop: 0 }}>{demo.title}</h2>
            <p style={{ fontSize: '0.95rem' }}>{demo.description}</p>

            <div style={{ margin: '0.75rem 0', flex: 1 }}>
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Demonstrated Pitfalls:
              </h3>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                {demo.issuesDemonstrated.map((issue, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{issue}</li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--bg-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.82rem' }}>
              <p style={{ margin: '0 0 0.35rem 0' }}>
                <strong>Automated:</strong> {demo.automatedDetection}
              </p>
              <p style={{ margin: 0 }}>
                <strong>Manual Review:</strong> {demo.manualVerification}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href={demo.path} className="btn btn-primary btn-sm">
                Open Interactive Demo
              </Link>
              <Link href={`/dashboard?target=${encodeURIComponent(demo.path + '?mode=problem')}`} className="btn btn-secondary btn-sm">
                Scan Flawed Fixture
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

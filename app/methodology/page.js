import Link from 'next/link';

export const metadata = {
  title: 'Accessibility Methodology — AccessLab',
  description: 'POUR principles, WCAG 2.1/2.2 conformance standards, automated testing scope, and human audit requirements.',
};

export default function MethodologyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <header>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-neutral">Engineering Foundations</span>
          <span className="badge badge-minor">WCAG 2.1 & 2.2</span>
        </div>
        <h1>AccessLab Auditing Methodology & Standards</h1>
        <p style={{ maxWidth: '850px', fontSize: '1.1rem' }}>
          A rigorous guide to web accessibility engineering, automated testing realities, WCAG POUR principles, and why automated tools alone cannot verify compliance.
        </p>
      </header>

      {/* POUR Section */}
      <section className="card" aria-labelledby="pour-heading">
        <h2 id="pour-heading" style={{ fontSize: '1.4rem', marginTop: 0 }}>
          The Four Core Principles: POUR
        </h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) are organized under four foundational principles known as <strong>POUR</strong>:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span className="badge badge-neutral">Principle 1</span>
            <h3 style={{ fontSize: '1.15rem', margin: '0.35rem 0' }}>Perceivable</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Information and user interface components must be presentable to users in ways they can perceive. Content cannot be invisible to all of a person’s senses. Includes text alternatives, captions, audio descriptions, adaptable layout, and sufficient color contrast.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span className="badge badge-neutral">Principle 2</span>
            <h3 style={{ fontSize: '1.15rem', margin: '0.35rem 0' }}>Operable</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              User interface components and navigation must be operable. Users must be able to operate the interface with whatever input method they use. Includes full keyboard operation, no keyboard traps, generous timeouts, seizure safety, skip links, and visible focus indicators.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span className="badge badge-neutral">Principle 3</span>
            <h3 style={{ fontSize: '1.15rem', margin: '0.35rem 0' }}>Understandable</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Information and operation of the user interface must be understandable. Users must be able to comprehend the content and the user interface behavior. Includes declared language, predictable focus/input interactions, readable instructions, and robust error identification and suggestions.
            </p>
          </div>

          <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
            <span className="badge badge-neutral">Principle 4</span>
            <h3 style={{ fontSize: '1.15rem', margin: '0.35rem 0' }}>Robust</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Content must be robust enough that it can be reliably interpreted by a wide variety of user agents, including assistive technologies. As technologies and user agents evolve, the content should remain accessible. Requires clean semantic HTML, valid ARIA, and correct roles and states.
            </p>
          </div>
        </div>
      </section>

      {/* WCAG Conformance Levels */}
      <section className="card" aria-labelledby="levels-heading">
        <h2 id="levels-heading" style={{ fontSize: '1.4rem', marginTop: 0 }}>
          WCAG Conformance Levels: A, AA, and AAA
        </h2>

        <div className="table-wrapper">
          <table className="a11y-table">
            <caption className="sr-only">WCAG Conformance Levels Breakdown</caption>
            <thead>
              <tr>
                <th scope="col" style={{ width: '120px' }}>Level</th>
                <th scope="col" style={{ width: '220px' }}>Target Scope</th>
                <th scope="col">Impact on Users with Disabilities</th>
                <th scope="col">Representative Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Level A</strong></td>
                <td>Minimum Baseline</td>
                <td>Without these, assistive technology users encounter total blockers that make task completion impossible.</td>
                <td>Image alt text (1.1.1), keyboard operable (2.1.1), no keyboard traps (2.1.2), page titles (2.4.2), name/role/value (4.1.2).</td>
              </tr>
              <tr>
                <td><strong>Level AA</strong></td>
                <td>International Legal Benchmark</td>
                <td>Removes the most common barriers encountered by the widest range of people with disabilities (ADA, Section 508, EN 301 549 standard).</td>
                <td>Contrast 4.5:1 (1.4.3), text resize to 200% (1.4.4), reflow at 400% (1.4.10), focus visible (2.4.7), error suggestions (3.3.3).</td>
              </tr>
              <tr>
                <td><strong>Level AAA</strong></td>
                <td>Advanced / Specialized</td>
                <td>Provides enhanced accommodations for specific user groups. Not generally required across entire websites as a blanket policy.</td>
                <td>Contrast 7:1 (1.4.6), sign language interpretation (1.2.6), comprehensive plain language, no timeouts (2.2.3).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Automated vs Manual Reality */}
      <section className="card" aria-labelledby="reality-heading">
        <h2 id="reality-heading" style={{ fontSize: '1.4rem', marginTop: 0 }}>
          The Reality of Automated Accessibility Scans
        </h2>

        <p>
          Many commercial vendors falsely claim that automated scanning or single-line JavaScript overlay widgets can make a website &ldquo;100% ADA compliant.&rdquo; This is technically and practically false.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.1rem', marginTop: 0, color: '#166534' }}>
              What axe-core Catches (~30–40% of WCAG)
            </h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#14532d', lineHeight: 1.6 }}>
              <li>Missing alternative text attributes on <code>&lt;img&gt;</code> tags</li>
              <li>Missing or unassociated form labels on inputs</li>
              <li>Mathematical color contrast failures on static text</li>
              <li>Duplicate DOM element IDs that break ARIA relationships</li>
              <li>Invalid ARIA roles, states, or prohibited parent-child relationships</li>
              <li>Missing document language declaration (<code>&lt;html lang=&quot;en&quot;&gt;</code>)</li>
              <li>Missing accessible names on buttons and links</li>
            </ul>
          </div>

          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ fontSize: '1.1rem', marginTop: 0, color: '#991b1b' }}>
              What Automated Tools Miss (~60–70% of WCAG)
            </h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#7f1d1d', lineHeight: 1.6 }}>
              <li><strong>Meaningful Alt Text:</strong> An image with <code>alt=&quot;photo&quot;</code> passes automated checks but fails human users.</li>
              <li><strong>Logical Focus Flow:</strong> Tab order may match DOM order but contradict visual or conversational flow.</li>
              <li><strong>Focus Obscuration:</strong> Focus outline may be technically rendered but hidden under a fixed sticky navbar.</li>
              <li><strong>Screen Reader Reading Order:</strong> Complex CSS flex/grid reordering can create jarring readouts.</li>
              <li><strong>Error Helpfulness:</strong> Errors like &ldquo;Invalid input&rdquo; pass syntax checks but do not explain what is required.</li>
              <li><strong>Cognitive Clarity:</strong> Distracting layouts, excessive jargon, and unannounced context shifts.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Understanding axe-core Result Buckets */}
      <section className="card" aria-labelledby="buckets-heading">
        <h2 id="buckets-heading" style={{ fontSize: '1.4rem', marginTop: 0 }}>
          axe-core Result Buckets Explained
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div className="metric-card" style={{ borderLeft: '4px solid var(--severity-critical-border)' }}>
            <span className="badge badge-critical" style={{ width: 'fit-content' }}>Violations</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Definitive Failures</h3>
            <p className="metric-desc">
              Elements that axe-core mathematically and syntactically proves violate a rule with zero false positives. These are actionable bugs requiring engineering fixes.
            </p>
          </div>

          <div className="metric-card" style={{ borderLeft: '4px solid var(--severity-incomplete-border)' }}>
            <span className="badge badge-incomplete" style={{ width: 'fit-content' }}>Incomplete</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Needs Manual Review</h3>
            <p className="metric-desc">
              Cases where axe-core cannot definitively decide without human eyes (e.g. text over semi-transparent gradients or complex CSS transforms). Never hide or treat these as passes.
            </p>
          </div>

          <div className="metric-card" style={{ borderLeft: '4px solid var(--severity-minor-border)' }}>
            <span className="badge badge-minor" style={{ width: 'fit-content' }}>Passes</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Evaluated Passes</h3>
            <p className="metric-desc">
              Elements tested that satisfied the specific automated test rule. Passing a rule does not mean the user experience is flawless.
            </p>
          </div>

          <div className="metric-card" style={{ borderLeft: '4px solid var(--border-strong)' }}>
            <span className="badge badge-neutral" style={{ width: 'fit-content' }}>Inapplicable</span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0' }}>Rules Not Triggered</h3>
            <p className="metric-desc">
              Rules where the page did not contain the corresponding HTML constructs (e.g. video captions rules on pages without video elements).
            </p>
          </div>
        </div>
      </section>

      {/* Official References */}
      <section className="card" aria-labelledby="references-heading">
        <h2 id="references-heading" style={{ fontSize: '1.4rem', marginTop: 0 }}>
          Authoritative Accessibility Resources
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
          <li>
            <a href="https://www.w3.org/WAI/" target="_blank" rel="noreferrer noopener" className="footer-link" style={{ fontWeight: 600 }}>
              W3C Web Accessibility Initiative (WAI) ↗
            </a>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)' }}>The international body defining digital accessibility guidelines and technical specifications.</p>
          </li>
          <li>
            <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer noopener" className="footer-link" style={{ fontWeight: 600 }}>
              W3C WCAG 2.2 Recommendation ↗
            </a>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)' }}>The current official W3C Recommendation for Web Content Accessibility Guidelines.</p>
          </li>
          <li>
            <a href="https://www.w3.org/WAI/ARIA/apg/" target="_blank" rel="noreferrer noopener" className="footer-link" style={{ fontWeight: 600 }}>
              WAI-ARIA Authoring Practices Guide (APG) ↗
            </a>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)' }}>Official design patterns and widget keyboard navigation specifications.</p>
          </li>
          <li>
            <a href="https://dequeuniversity.com/rules/axe/" target="_blank" rel="noreferrer noopener" className="footer-link" style={{ fontWeight: 600 }}>
              Deque University: axe-core Rule Descriptions ↗
            </a>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)' }}>Complete rule catalog explaining failure rationale and remediation steps.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

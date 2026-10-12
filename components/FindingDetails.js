import SeverityBadge from './SeverityBadge';

/**
 * Detailed drawer/panel for a single axe-core audit finding.
 * Safely escapes all HTML snippets and renders them strictly as formatted text.
 */
export default function FindingDetails({ finding, isReview = false }) {
  if (!finding) return null;

  // Guidance mappings based on rule ID
  const getRemediationAdvice = (ruleId) => {
    switch (ruleId) {
      case 'label':
      case 'form-field-multiple-labels':
        return {
          impactExplanation: 'Screen reader users rely on programmatic labels to know what information an input expects. Without a label, the screen reader may guess from nearby text or say "edit text blank", leaving users unable to complete transactions.',
          fixRecommendation: 'Add an explicit <label for="inputId">Your Label</label> corresponding to <input id="inputId">. Alternatively, apply aria-label="Descriptive name" or aria-labelledby="idOfLabelElement".',
          codeSample: `<label for="username">Username <span aria-hidden="true">*</span></label>\n<input id="username" type="text" required aria-required="true" />`,
        };
      case 'button-name':
        return {
          impactExplanation: 'Buttons without accessible names are announced simply as "button". Blind users cannot deduce whether activating it will submit an order, delete data, or close a window.',
          fixRecommendation: 'Add visible text inside the button, or provide an aria-label="Action description". If using an icon button, include a <span class="sr-only">Close dialog</span> element.',
          codeSample: `<button type="button" aria-label="Close modal dialog">\n  <svg aria-hidden="true">...</svg>\n</button>`,
        };
      case 'link-name':
        return {
          impactExplanation: 'Links without text or with only decorative images are impossible for screen reader users to understand. Screen readers often announce the raw destination URL instead.',
          fixRecommendation: 'Ensure every <a> has meaningful visible text, an aria-label, or an image with non-empty alt text.',
          codeSample: `<a href="/methodology" aria-label="Read full WCAG 2.2 methodology">\n  Documentation\n</a>`,
        };
      case 'color-contrast':
        return {
          impactExplanation: 'Insufficient contrast between text and background makes reading difficult or impossible for people with low vision, age-related vision degradation, or anyone in bright sunlight.',
          fixRecommendation: 'Adjust font color or background to achieve at least 4.5:1 contrast for normal text and 3:1 for large text (18pt or 14pt bold).',
          codeSample: `/* WCAG AA Compliant Text Contrast */\ncolor: #0f172a; /* 15.3:1 contrast against #ffffff */\nbackground-color: #ffffff;`,
        };
      case 'image-alt':
      case 'image-redundant-alt':
        return {
          impactExplanation: 'When an informative image lacks alt text, screen readers announce the file path or omit it entirely, preventing blind users from perceiving content.',
          fixRecommendation: 'Add a descriptive alt attribute explaining the content or function. For purely decorative images, set alt="" and aria-hidden="true".',
          codeSample: `<!-- Informative -->\n<img src="chart.svg" alt="Quarterly compliance improved to 88%" />\n\n<!-- Decorative -->\n<img src="divider.svg" alt="" aria-hidden="true" />`,
        };
      case 'heading-order':
        return {
          impactExplanation: 'Screen reader users frequently skim web pages by navigating from heading to heading. Skipping heading levels creates confusion about document structure.',
          fixRecommendation: 'Nest headings sequentially without skipping levels (H1 followed by H2, then H3). Use CSS font-size for visual presentation rather than heading tags.',
          codeSample: `<h1>Page Title</h1>\n  <h2>Section Heading</h2>\n    <h3>Subsection</h3>`,
        };
      default:
        return {
          impactExplanation: 'Violations of WCAG standards introduce barriers for users relying on screen readers, keyboards, speech recognition, or screen magnifiers.',
          fixRecommendation: 'Review the official rule specification link below for specific guidance.',
          codeSample: null,
        };
    }
  };

  const advice = getRemediationAdvice(finding.id);

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        marginTop: '0.75rem',
      }}
    >
      {/* Header with Title and Tags */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <SeverityBadge impact={finding.impact} isReview={isReview} />
            <code style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{finding.id}</code>
            <span className="badge badge-neutral">Automated axe-core finding</span>
          </div>
          <h4 style={{ fontSize: '1.15rem', margin: 0 }}>{finding.help || finding.id}</h4>
        </div>

        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {(finding.tags || []).map((tag) => (
            <span key={tag} className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
        <strong>Rule Description:</strong> {finding.description}
      </p>

      {/* Human Impact Explanation */}
      <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
        <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', margin: '0 0 0.25rem 0' }}>
          Why This Matters to Real Users
        </h5>
        <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>
          {advice.impactExplanation}
        </p>
      </div>

      {/* Affected Elements List */}
      <div style={{ marginBottom: '1rem' }}>
        <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Affected DOM Elements ({(finding.nodes || []).length} instance{finding.nodes?.length === 1 ? '' : 's'})
        </h5>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {(finding.nodes || []).map((node, index) => (
            <div
              key={index}
              style={{
                background: '#0f172a',
                color: '#f8fafc',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                overflowX: 'auto',
              }}
            >
              <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                Selector: <code>{Array.isArray(node.target) ? node.target.join(' ') : String(node.target)}</code>
              </div>
              <pre style={{ margin: 0, padding: 0, background: 'transparent', color: '#38bdf8', fontSize: '0.85rem', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {node.html || 'Element snippet unavailable'}
              </pre>

              {node.failureSummary && (
                <div style={{ marginTop: '0.5rem', borderTop: '1px solid #334155', paddingTop: '0.5rem', color: '#fbbf24', fontSize: '0.8rem' }}>
                  <strong>Failure Summary:</strong> {node.failureSummary}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Remediation Guide & Code Sample */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
        <h5 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#166534', margin: '0 0 0.25rem 0' }}>
          Recommended Remediation
        </h5>
        <p style={{ fontSize: '0.9rem', color: '#14532d', margin: '0 0 0.5rem 0' }}>
          {advice.fixRecommendation}
        </p>

        {advice.codeSample && (
          <pre style={{ background: '#14532d', color: '#f0fdf4', padding: '0.65rem 0.85rem', borderRadius: '4px', fontSize: '0.82rem', margin: 0 }}>
            {advice.codeSample}
          </pre>
        )}
      </div>

      {/* Authoritative Reference Link */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>
          Caveat: Automated findings require verification in the context of the complete user flow.
        </span>
        {finding.helpUrl && (
          <a
            href={finding.helpUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
            style={{ fontWeight: 600, color: 'var(--accent-primary)' }}
          >
            Authoritative Rule Documentation <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens external Deque University guide)</span>
          </a>
        )}
      </div>
    </div>
  );
}

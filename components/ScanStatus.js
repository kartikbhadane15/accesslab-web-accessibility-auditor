export default function ScanStatus({ status, error, targetName }) {
  if (!status || status === 'idle') {
    return null;
  }

  return (
    <aside
      className={`callout ${
        status === 'running' || status === 'queued'
          ? 'callout-info'
          : status === 'failed'
          ? 'callout-warning'
          : 'callout-info'
      }`}
      aria-live="polite"
      aria-atomic="true"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {(status === 'running' || status === 'queued') && (
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                animation: 'pulse 1.5s infinite',
              }}
              aria-hidden="true"
            />
          )}
          {status === 'completed' && <span aria-hidden="true" style={{ color: '#16a34a', fontWeight: 800 }}>✓</span>}
          {status === 'failed' && <span aria-hidden="true" style={{ color: '#dc2626', fontWeight: 800 }}>✖</span>}

          <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
            {status === 'queued' && `Scan Queued: Preparing headless browser for ${targetName}...`}
            {status === 'running' && `Auditing Target: Running axe-core against ${targetName}...`}
            {status === 'completed' && `Scan Completed: Audit findings ready for review.`}
            {status === 'failed' && `Scan Failed: ${error || 'Unable to complete audit.'}`}
          </span>
        </div>

        <span className="badge badge-neutral" style={{ textTransform: 'capitalize' }}>
          Status: {status}
        </span>
      </div>
    </aside>
  );
}

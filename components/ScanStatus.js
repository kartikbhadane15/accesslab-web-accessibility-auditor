export default function ScanStatus({ status, error, targetName }) {
  if (!status || status === 'idle') {
    return null;
  }

  const isRunning = status === 'running' || status === 'queued';
  const isCompleted = status === 'completed';
  const isFailed = status === 'failed';

  return (
    <aside
      className="callout"
      style={{
        background: isRunning ? 'var(--accent-light)' : isCompleted ? 'var(--severity-pass-bg)' : 'var(--severity-critical-bg)',
        borderColor: isRunning ? 'var(--accent-primary)' : isCompleted ? 'var(--severity-pass-accent)' : 'var(--severity-critical-accent)',
        color: isRunning ? 'var(--text-primary)' : isCompleted ? 'var(--severity-pass-text)' : 'var(--severity-critical-text)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s ease',
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isRunning && (
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.25)',
                animation: 'pulse 1.5s infinite',
              }}
              aria-hidden="true"
            />
          )}
          {isCompleted && (
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#10b981',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 900,
              }}
            >
              ✓
            </span>
          )}
          {isFailed && (
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: '#ef4444',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 900,
              }}
            >
              ✕
            </span>
          )}

          <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
            {status === 'queued' && `Scan Queued: Preparing headless browser for ${targetName}...`}
            {status === 'running' && `Auditing Target: Running axe-core against ${targetName}...`}
            {status === 'completed' && `Scan Completed: Audit findings ready for review.`}
            {status === 'failed' && `Scan Failed: ${error || 'Unable to complete audit.'}`}
          </span>
        </div>

        <span
          className="badge"
          style={{
            background: isRunning ? 'var(--accent-light)' : isCompleted ? '#dcfce7' : '#fee2e2',
            color: isRunning ? 'var(--accent-primary)' : isCompleted ? '#166534' : '#991b1b',
            borderColor: isRunning ? 'var(--accent-border)' : isCompleted ? '#86efac' : '#fca5a5',
            textTransform: 'capitalize',
            fontWeight: 700,
          }}
        >
          Status: {status}
        </span>
      </div>
    </aside>
  );
}

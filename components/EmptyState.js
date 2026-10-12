import Link from 'next/link';

export default function EmptyState({ title, message, actionText, actionHref, onAction }) {
  return (
    <div
      className="card"
      style={{
        textAlign: 'center',
        padding: '3rem 1.5rem',
        margin: '1.5rem 0',
        background: 'var(--bg-subtle)',
        border: '1px dashed var(--border-strong)',
      }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} aria-hidden="true">
        📋
      </div>
      <h3 style={{ fontSize: '1.25rem', marginTop: 0 }}>{title || 'No Findings to Display'}</h3>
      <p style={{ maxWidth: '540px', margin: '0 auto 1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        {message || 'Select a demo fixture from the library or run an automated scan to view real axe-core accessibility results.'}
      </p>

      {actionHref && (
        <Link href={actionHref} className="btn btn-primary btn-sm">
          {actionText || 'Explore Demo Library'}
        </Link>
      )}

      {onAction && (
        <button type="button" onClick={onAction} className="btn btn-primary btn-sm">
          {actionText || 'Run Scan'}
        </button>
      )}
    </div>
  );
}

const VARIANT_ICONS = {
  critical: '🛑',
  serious: '⚡',
  moderate: '💡',
  minor: 'ℹ️',
  incomplete: '🔍',
  passes: '✅',
};

export default function SummaryCard({ title, value, description, badgeVariant }) {
  const icon = VARIANT_ICONS[badgeVariant] || (title.toLowerCase().includes('violation') ? '⚠️' : '📊');

  return (
    <div className={`metric-card metric-card-${badgeVariant || 'default'}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span aria-hidden="true" style={{ fontSize: '1.1rem' }}>{icon}</span>
          <span className="metric-title">{title}</span>
        </div>
        {badgeVariant && (
          <span className={`badge badge-${badgeVariant}`} style={{ fontSize: '0.72rem', letterSpacing: '0.04em' }}>
            Count
          </span>
        )}
      </div>
      <div className="metric-value">{value}</div>
      {description && <div className="metric-desc">{description}</div>}
    </div>
  );
}

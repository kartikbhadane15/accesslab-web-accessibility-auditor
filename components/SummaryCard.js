export default function SummaryCard({ title, value, description, badgeVariant }) {
  return (
    <div className="metric-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="metric-title">{title}</span>
        {badgeVariant && (
          <span className={`badge badge-${badgeVariant}`} style={{ fontSize: '0.7rem' }}>
            Count
          </span>
        )}
      </div>
      <div className="metric-value">{value}</div>
      {description && <div className="metric-desc">{description}</div>}
    </div>
  );
}

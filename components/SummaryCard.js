const VARIANT_CONFIG = {
  critical: {
    icon: '🛑',
    accentColor: '#dc2626',
    bgGradient: 'linear-gradient(145deg, #ffffff, #fff5f5)',
    borderColor: '#fecaca',
  },
  serious: {
    icon: '⚡',
    accentColor: '#ea580c',
    bgGradient: 'linear-gradient(145deg, #ffffff, #fff7ed)',
    borderColor: '#fed7aa',
  },
  moderate: {
    icon: '💡',
    accentColor: '#ca8a04',
    bgGradient: 'linear-gradient(145deg, #ffffff, #fefce8)',
    borderColor: '#fef08a',
  },
  minor: {
    icon: 'ℹ️',
    accentColor: '#16a34a',
    bgGradient: 'linear-gradient(145deg, #ffffff, #f0fdf4)',
    borderColor: '#bbf7d0',
  },
  incomplete: {
    icon: '🔍',
    accentColor: '#7c3aed',
    bgGradient: 'linear-gradient(145deg, #ffffff, #faf5ff)',
    borderColor: '#e9d5ff',
  },
  passes: {
    icon: '✅',
    accentColor: '#059669',
    bgGradient: 'linear-gradient(145deg, #ffffff, #ecfdf5)',
    borderColor: '#a7f3d0',
  },
};

export default function SummaryCard({ title, value, description, badgeVariant }) {
  const config = VARIANT_CONFIG[badgeVariant] || {
    icon: title.toLowerCase().includes('violation') ? '⚠️' : '📊',
    accentColor: Number(value) > 0 ? '#dc2626' : '#2563eb',
    bgGradient: Number(value) > 0 ? 'linear-gradient(145deg, #ffffff, #fff5f5)' : 'linear-gradient(145deg, #ffffff, #f8fafc)',
    borderColor: '#e2e8f0',
  };

  const hasIssues = Number(value) > 0;
  const isGoodCard = badgeVariant === 'passes';

  return (
    <div
      className={`metric-card metric-card-${badgeVariant || 'default'}`}
      style={{
        background: config.bgGradient,
        borderColor: config.borderColor,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.25rem 1.15rem',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span aria-hidden="true" style={{ fontSize: '1.1rem' }}>{config.icon}</span>
            <span className="metric-title" style={{ color: 'var(--text-secondary)', fontWeight: 700, fontSize: '0.85rem' }}>
              {title}
            </span>
          </div>

          {/* Clean status dot indicator */}
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: hasIssues || isGoodCard ? config.accentColor : '#cbd5e1',
              boxShadow: hasIssues || isGoodCard ? `0 0 6px ${config.accentColor}55` : 'none',
            }}
            aria-hidden="true"
          />
        </div>

        <div
          className="metric-value"
          style={{
            color: hasIssues ? config.accentColor : isGoodCard ? '#059669' : 'var(--text-primary)',
            fontSize: '2.4rem',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            margin: '0.2rem 0 0.5rem 0',
          }}
        >
          {value}
        </div>
      </div>

      {description && (
        <div className="metric-desc" style={{ fontSize: '0.82rem', lineHeight: 1.4, color: 'var(--text-muted)' }}>
          {description}
        </div>
      )}
    </div>
  );
}

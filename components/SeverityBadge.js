export default function SeverityBadge({ impact, isReview = false }) {
  if (isReview) {
    return (
      <span className="badge badge-incomplete">
        <span aria-hidden="true">?</span> Needs Review
      </span>
    );
  }

  const normalized = (impact || 'minor').toLowerCase();

  switch (normalized) {
    case 'critical':
      return (
        <span className="badge badge-critical">
          <span aria-hidden="true">✖</span> Critical
        </span>
      );
    case 'serious':
      return (
        <span className="badge badge-serious">
          <span aria-hidden="true">▲</span> Serious
        </span>
      );
    case 'moderate':
      return (
        <span className="badge badge-moderate">
          <span aria-hidden="true">◆</span> Moderate
        </span>
      );
    case 'minor':
      return (
        <span className="badge badge-minor">
          <span aria-hidden="true">●</span> Minor
        </span>
      );
    default:
      return (
        <span className="badge badge-neutral">
          <span aria-hidden="true">ℹ</span> {impact}
        </span>
      );
  }
}

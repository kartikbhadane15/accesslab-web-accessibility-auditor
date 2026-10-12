'use client';

import { useState, useId } from 'react';
import SeverityBadge from './SeverityBadge';
import FindingDetails from './FindingDetails';

export default function FindingsTable({ violations = [], incomplete = [] }) {
  const [activeTab, setActiveTab] = useState('violations'); // 'violations' | 'incomplete'
  const [impactFilter, setImpactFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState(new Set());

  const searchInputId = useId();
  const impactSelectId = useId();
  const tagSelectId = useId();

  const currentList = activeTab === 'violations' ? violations : incomplete;

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Collect unique tags
  const allTags = Array.from(
    new Set(currentList.flatMap((rule) => rule.tags || []))
  ).sort();

  // Filter items
  const filteredItems = currentList.filter((rule) => {
    // Impact filter
    if (impactFilter !== 'all' && (rule.impact || 'minor') !== impactFilter) {
      return false;
    }

    // Tag filter
    if (tagFilter !== 'all' && !(rule.tags || []).includes(tagFilter)) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchId = (rule.id || '').toLowerCase().includes(query);
      const matchHelp = (rule.help || '').toLowerCase().includes(query);
      const matchDesc = (rule.description || '').toLowerCase().includes(query);
      const matchSelector = (rule.nodes || []).some((node) =>
        (Array.isArray(node.target) ? node.target.join(' ') : String(node.target || '')).toLowerCase().includes(query)
      );
      if (!matchId && !matchHelp && !matchDesc && !matchSelector) {
        return false;
      }
    }

    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Tab Switcher: Violations vs Needs Review */}
      <div style={{ display: 'flex', gap: '0.75rem', borderBottom: '2px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
        <button
          type="button"
          className={`btn btn-sm ${activeTab === 'violations' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('violations')}
          aria-pressed={activeTab === 'violations'}
        >
          Automated Violations ({violations.length})
        </button>
        <button
          type="button"
          className={`btn btn-sm ${activeTab === 'incomplete' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('incomplete')}
          aria-pressed={activeTab === 'incomplete'}
        >
          Needs Manual Review ({incomplete.length})
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          background: 'var(--bg-subtle)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <div>
          <label htmlFor={searchInputId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Search Findings
          </label>
          <input
            id={searchInputId}
            type="search"
            placeholder="Search by rule, title, or selector..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-strong)',
              fontSize: '0.9rem',
            }}
          />
        </div>

        <div>
          <label htmlFor={impactSelectId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Filter by Severity
          </label>
          <select
            id={impactSelectId}
            value={impactFilter}
            onChange={(e) => setImpactFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-strong)',
              fontSize: '0.9rem',
              background: 'var(--bg-surface)',
            }}
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="serious">Serious</option>
            <option value="moderate">Moderate</option>
            <option value="minor">Minor</option>
          </select>
        </div>

        <div>
          <label htmlFor={tagSelectId} style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem' }}>
            Filter by WCAG / Category Tag
          </label>
          <select
            id={tagSelectId}
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-strong)',
              fontSize: '0.9rem',
              background: 'var(--bg-surface)',
            }}
          >
            <option value="all">All Tags ({allTags.length})</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Semantic Findings Table */}
      <div className="table-wrapper">
        <table className="a11y-table">
          <caption className="sr-only">
            {activeTab === 'violations' ? 'Automated accessibility violations table' : 'Items requiring manual review table'}
          </caption>
          <thead>
            <tr>
              <th scope="col" style={{ width: '130px' }}>Severity</th>
              <th scope="col" style={{ width: '160px' }}>Rule ID</th>
              <th scope="col">Description & Elements</th>
              <th scope="col" style={{ width: '110px', textAlign: 'center' }}>Instances</th>
              <th scope="col" style={{ width: '120px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)' }}>
                  No {activeTab === 'violations' ? 'violations' : 'review items'} matched your current search and filter settings.
                </td>
              </tr>
            ) : (
              filteredItems.map((item) => {
                const isExpanded = expandedIds.has(item.id);
                const detailsId = `details-${item.id}`;
                return (
                  <tr key={item.id} style={{ verticalAlign: 'top' }}>
                    <td>
                      <SeverityBadge impact={item.impact} isReview={activeTab === 'incomplete'} />
                    </td>
                    <td>
                      <code style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.id}</code>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                        {item.help || item.id}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        {item.description}
                      </div>

                      {/* Expanded Drawer */}
                      {isExpanded && (
                        <div id={detailsId} style={{ marginTop: '0.5rem' }}>
                          <FindingDetails finding={item} isReview={activeTab === 'incomplete'} />
                        </div>
                      )}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>
                      {(item.nodes || []).length}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => toggleExpand(item.id)}
                        aria-expanded={isExpanded}
                        aria-controls={detailsId}
                      >
                        {isExpanded ? 'Hide Fix' : 'Inspect Fix'}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

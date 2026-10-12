'use client';

import { useState, useEffect } from 'react';
import { CHECKLIST_ITEMS } from '../lib/accessibility/checklist';

const STORAGE_KEY = 'accesslab_manual_checklist_v1';

export default function ManualChecklist({ onStateChange }) {
  const [checklistState, setChecklistState] = useState({});
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setChecklistState(parsed);
        if (onStateChange) onStateChange(parsed);
      }
    } catch (e) {
      console.warn('Could not load checklist from localStorage:', e);
    }
  }, [onStateChange]);

  const updateItem = (id, field, value) => {
    setChecklistState((prev) => {
      const current = prev[id] || { status: 'not-tested', notes: '' };
      const updated = {
        ...prev,
        [id]: {
          ...current,
          [field]: value,
        },
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save checklist to localStorage:', e);
      }

      if (onStateChange) onStateChange(updated);
      return updated;
    });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all manual checklist evaluations to "Not Tested"?')) {
      setChecklistState({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      if (onStateChange) onStateChange({});
    }
  };

  // Metrics
  const totalItems = CHECKLIST_ITEMS.length;
  let passedCount = 0;
  let needsWorkCount = 0;
  let notTestedCount = 0;
  let notApplicableCount = 0;

  CHECKLIST_ITEMS.forEach((item) => {
    const status = checklistState[item.id]?.status || 'not-tested';
    if (status === 'pass') passedCount++;
    else if (status === 'needs-work') needsWorkCount++;
    else if (status === 'not-applicable') notApplicableCount++;
    else notTestedCount++;
  });

  const categories = Array.from(new Set(CHECKLIST_ITEMS.map((item) => item.category)));

  const filteredItems = CHECKLIST_ITEMS.filter((item) => {
    if (filterCategory !== 'all' && item.category !== filterCategory) return false;
    const currentStatus = checklistState[item.id]?.status || 'not-tested';
    if (filterStatus !== 'all' && currentStatus !== filterStatus) return false;
    return true;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Notice Banner */}
      <div className="callout callout-info">
        <h2 style={{ fontSize: '1.05rem', margin: '0 0 0.25rem 0' }}>
          Human Accessibility Review Protocol
        </h2>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          Checklist results represent human-tested observations. Automated scanners cannot assess cognitive flow, reading order logic, or screen reader spoken cadence. This checklist complements automated axe-core audits.
        </p>
      </div>

      {/* Progress Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
        <div className="metric-card">
          <span className="metric-title">Checks Passed</span>
          <div className="metric-value" style={{ color: '#16a34a' }}>{passedCount} / {totalItems}</div>
          <span className="metric-desc">Satisfied criteria</span>
        </div>

        <div className="metric-card">
          <span className="metric-title">Needs Work</span>
          <div className="metric-value" style={{ color: '#dc2626' }}>{needsWorkCount}</div>
          <span className="metric-desc">Barriers identified</span>
        </div>

        <div className="metric-card">
          <span className="metric-title">Not Tested</span>
          <div className="metric-value" style={{ color: '#64748b' }}>{notTestedCount}</div>
          <span className="metric-desc">Pending human review</span>
        </div>

        <div className="metric-card">
          <span className="metric-title">Not Applicable</span>
          <div className="metric-value" style={{ color: '#64748b' }}>{notApplicableCount}</div>
          <span className="metric-desc">Feature absent</span>
        </div>
      </div>

      {/* Filter and Reset Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          background: 'var(--bg-subtle)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <label htmlFor="cat-filter" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem' }}>
              Category
            </label>
            <select
              id="cat-filter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              style={{ padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border-strong)', background: '#fff' }}
            >
              <option value="all">All Categories ({categories.length})</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="stat-filter" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.2rem' }}>
              Status
            </label>
            <select
              id="stat-filter"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{ padding: '0.4rem 0.6rem', borderRadius: '4px', border: '1px solid var(--border-strong)', background: '#fff' }}
            >
              <option value="all">All Statuses</option>
              <option value="not-tested">Not Tested</option>
              <option value="pass">Pass</option>
              <option value="needs-work">Needs Work</option>
              <option value="not-applicable">Not Applicable</option>
            </select>
          </div>
        </div>

        <button type="button" onClick={handleReset} className="btn btn-secondary btn-sm">
          Reset All to Not Tested
        </button>
      </div>

      {/* Checklist Items Accordion / Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredItems.map((item, index) => {
          const itemState = checklistState[item.id] || { status: 'not-tested', notes: '' };
          const statusId = `status-${item.id}`;
          const notesId = `notes-${item.id}`;

          return (
            <article
              key={item.id}
              className="card"
              style={{
                borderLeft:
                  itemState.status === 'pass'
                    ? '4px solid #22c55e'
                    : itemState.status === 'needs-work'
                    ? '4px solid #ef4444'
                    : '4px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="badge badge-neutral">{item.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      #{index + 1} of {totalItems}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{item.title}</h3>
                </div>

                {/* Status Selector */}
                <div>
                  <label htmlFor={statusId} className="sr-only">
                    Evaluation status for {item.title}
                  </label>
                  <select
                    id={statusId}
                    value={itemState.status}
                    onChange={(e) => updateItem(item.id, 'status', e.target.value)}
                    style={{
                      padding: '0.4rem 0.75rem',
                      borderRadius: '4px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      border: '2px solid',
                      borderColor:
                        itemState.status === 'pass'
                          ? '#22c55e'
                          : itemState.status === 'needs-work'
                          ? '#ef4444'
                          : '#94a3b8',
                      background:
                        itemState.status === 'pass'
                          ? '#f0fdf4'
                          : itemState.status === 'needs-work'
                          ? '#fef2f2'
                          : '#fff',
                      color:
                        itemState.status === 'pass'
                          ? '#166534'
                          : itemState.status === 'needs-work'
                          ? '#991b1b'
                          : '#334155',
                    }}
                  >
                    <option value="not-tested">⏳ Not Tested</option>
                    <option value="pass">✓ Pass</option>
                    <option value="needs-work">⚠ Needs Work</option>
                    <option value="not-applicable">⊘ Not Applicable</option>
                  </select>
                </div>
              </div>

              {/* Instructions and Criteria */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', background: 'var(--bg-subtle)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', fontSize: '0.88rem' }}>
                <div>
                  <strong>What to inspect:</strong>
                  <p style={{ margin: '0.2rem 0 0 0' }}>{item.whatToTest}</p>
                </div>
                <div>
                  <strong>How to test:</strong>
                  <p style={{ margin: '0.2rem 0 0 0' }}>{item.howToTest}</p>
                </div>
                <div>
                  <strong>Expected result:</strong>
                  <p style={{ margin: '0.2rem 0 0 0' }}>{item.expectedResult}</p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span><strong>WCAG Benchmark:</strong> {item.wcagCriteria}</span>
              </div>

              {/* Notes Input */}
              <div>
                <label htmlFor={notesId} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  Auditor Observations & Notes:
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  value={itemState.notes}
                  onChange={(e) => updateItem(item.id, 'notes', e.target.value)}
                  placeholder="Record reproduction steps, assistive technology version, browser behavior, or ticket links..."
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

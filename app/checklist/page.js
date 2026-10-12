'use client';

import { useState } from 'react';
import Link from 'next/link';
import ManualChecklist from '../../components/ManualChecklist';
import { triggerDownload } from '../../lib/report/exportReport';

export default function ChecklistPage() {
  const [checklistData, setChecklistData] = useState({});

  const handleExportChecklist = () => {
    const payload = {
      title: 'AccessLab Manual Accessibility Review Checklist',
      exportedAt: new Date().toISOString(),
      standards: 'WCAG 2.1 & 2.2 Level AA',
      disclaimer: 'User-entered manual evaluations. Not inferred from automated tooling.',
      evaluations: checklistData,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json',
    });
    triggerDownload(blob, `accesslab-manual-checklist-${Date.now()}.json`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-neutral">Human Audit Protocol</span>
              <span className="badge badge-minor">12 Core Evaluation Points</span>
            </div>
            <h1>Manual Accessibility Testing Checklist</h1>
            <p style={{ maxWidth: '850px', fontSize: '1.05rem' }}>
              A systematic guide covering critical WCAG success criteria that automated test engines cannot verify: keyboard traps, zoom reflow, screen reader reading flow, meaningful alternative text, and accessible names.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button type="button" onClick={handleExportChecklist} className="btn btn-secondary btn-sm">
              Export Checklist JSON
            </button>
            <button type="button" onClick={() => window.print()} className="btn btn-secondary btn-sm">
              Print Checklist
            </button>
          </div>
        </div>
      </header>

      {/* Manual Checklist Interactive Component */}
      <ManualChecklist onStateChange={setChecklistData} />

      {/* Methodology Callout */}
      <div className="card" style={{ background: 'var(--bg-subtle)' }}>
        <h2 style={{ fontSize: '1.15rem', marginTop: 0 }}>
          Why Manual Testing Cannot Be Replaced
        </h2>
        <p style={{ fontSize: '0.92rem' }}>
          An automated audit evaluates syntactic rules: whether an <code>&lt;img&gt;</code> has an <code>alt</code> attribute, whether an <code>&lt;input&gt;</code> has an ID, and whether contrast passes a mathematical formula. However, only a human can verify whether the alternative text makes sense in context, whether error suggestions actually guide a struggling user, or whether focus jumps unexpectedly across complex application components.
        </p>
        <Link href="/methodology" className="footer-link" style={{ fontWeight: 600 }}>
          Read the complete AccessLab Accessibility Methodology →
        </Link>
      </div>
    </div>
  );
}

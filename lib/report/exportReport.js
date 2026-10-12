/**
 * AccessLab Report Exporter
 * Generates structured JSON, CSV, and printable HTML reports.
 * All HTML/text data is strictly sanitized to prevent XSS or CSV formula injection.
 */

export function sanitizeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function sanitizeCsvCell(value) {
  if (value === null || value === undefined) return '""';
  let str = String(value);
  // Mitigate CSV Formula Injection (CWE-1236)
  if (/^[=+\-@\t\r]/.test(str)) {
    str = "'" + str;
  }
  return `"${str.replace(/"/g, '""')}"`;
}

export function exportScanAsJSON(scanData, checklistData = {}) {
  const exportPayload = {
    metadata: {
      generatedBy: 'AccessLab Web Accessibility Auditor',
      engine: scanData.engine || 'axe-core',
      engineVersion: scanData.engineVersion || 'unknown',
      scannedAt: scanData.scannedAt || new Date().toISOString(),
      exportedAt: new Date().toISOString(),
      pageName: scanData.pageName || '',
      pageUrl: scanData.pageUrl || '',
      disclaimer:
        'AccessLab is a developer support tool. Automated findings catch roughly 30-40% of WCAG criteria. Manual verification remains essential. This report does not constitute legal or formal compliance certification.',
    },
    summary: scanData.summary || {},
    violations: scanData.violations || [],
    needsReview: scanData.incomplete || [],
    passesCount: scanData.summary?.passesCount || 0,
    inapplicableCount: scanData.summary?.inapplicableCount || 0,
    manualChecklist: checklistData,
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
    type: 'application/json',
  });
  return blob;
}

export function exportScanAsCSV(scanData) {
  const headers = [
    'Result Type',
    'Rule ID',
    'Impact',
    'Rule Title',
    'WCAG Tags',
    'Target Selector',
    'Affected HTML',
    'Failure Summary',
    'Help URL',
  ];

  const rows = [headers.map(sanitizeCsvCell).join(',')];

  const appendRuleRows = (ruleList, resultType) => {
    (ruleList || []).forEach((rule) => {
      const tags = (rule.tags || []).join('; ');
      const nodes = rule.nodes && rule.nodes.length > 0 ? rule.nodes : [{ target: [], html: '', failureSummary: '' }];

      nodes.forEach((node) => {
        const selector = Array.isArray(node.target) ? node.target.join(' ') : String(node.target || '');
        const row = [
          resultType,
          rule.id || '',
          rule.impact || '',
          rule.help || rule.description || '',
          tags,
          selector,
          node.html || '',
          node.failureSummary || '',
          rule.helpUrl || '',
        ];
        rows.push(row.map(sanitizeCsvCell).join(','));
      });
    });
  };

  appendRuleRows(scanData.violations, 'Violation');
  appendRuleRows(scanData.incomplete, 'Needs Review');

  const csvContent = '\uFEFF' + rows.join('\r\n'); // UTF-8 BOM
  return new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
}

export function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

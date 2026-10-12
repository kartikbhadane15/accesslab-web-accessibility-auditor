/**
 * Normalizes raw axe-core output into AccessLab's structured, safe audit model.
 * Never fabricates counts, severities, or WCAG tags.
 * Preserves strict separation between automated violations and incomplete (needs review) items.
 */

export function normalizeAxeResults(rawResults, { pageUrl, pageName, scanId }) {
  if (!rawResults) {
    throw new Error('Invalid scan results: raw axe output is empty');
  }

  const {
    violations = [],
    incomplete = [],
    passes = [],
    inapplicable = [],
    testEngine = { name: 'axe-core', version: 'unknown' },
    timestamp = new Date().toISOString(),
  } = rawResults;

  // Compute exact impact counts from actual violations
  let criticalCount = 0;
  let seriousCount = 0;
  let moderateCount = 0;
  let minorCount = 0;

  const mapRuleNodes = (rule) => {
    return (rule.nodes || []).map((node) => ({
      target: Array.isArray(node.target) ? node.target : [node.target].filter(Boolean),
      html: typeof node.html === 'string' ? node.html.trim() : '',
      failureSummary: node.failureSummary || '',
      impact: node.impact || rule.impact || 'minor',
    }));
  };

  const mapRules = (ruleList, isViolation = false) => {
    return ruleList.map((rule) => {
      const impact = rule.impact || 'minor';
      if (isViolation) {
        if (impact === 'critical') criticalCount++;
        else if (impact === 'serious') seriousCount++;
        else if (impact === 'moderate') moderateCount++;
        else if (impact === 'minor') minorCount++;
      }

      return {
        id: rule.id,
        impact: impact,
        description: rule.description || '',
        help: rule.help || rule.id,
        helpUrl: rule.helpUrl || `https://dequeuniversity.com/rules/axe/4.14/${rule.id}`,
        tags: Array.isArray(rule.tags) ? rule.tags : [],
        nodes: mapRuleNodes(rule),
      };
    });
  };

  const normalizedViolations = mapRules(violations, true);
  const normalizedIncomplete = mapRules(incomplete, false);
  const normalizedPasses = mapRules(passes, false);
  const normalizedInapplicable = mapRules(inapplicable, false);

  return {
    id: scanId || `scan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    pageName: pageName || pageUrl,
    pageUrl: pageUrl,
    scannedAt: timestamp,
    engine: testEngine.name || 'axe-core',
    engineVersion: testEngine.version || '4.x',
    status: 'completed',
    summary: {
      totalViolations: normalizedViolations.length,
      needsReviewCount: normalizedIncomplete.length,
      passesCount: normalizedPasses.length,
      inapplicableCount: normalizedInapplicable.length,
      criticalCount,
      seriousCount,
      moderateCount,
      minorCount,
      rulesChecked:
        normalizedViolations.length +
        normalizedIncomplete.length +
        normalizedPasses.length +
        normalizedInapplicable.length,
    },
    violations: normalizedViolations,
    incomplete: normalizedIncomplete,
    passes: normalizedPasses,
    inapplicable: normalizedInapplicable,
  };
}

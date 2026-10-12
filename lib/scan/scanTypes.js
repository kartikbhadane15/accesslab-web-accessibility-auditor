/**
 * AccessLab Scan Configuration and Registry
 * Strictly constrained to known local demo fixtures to prevent SSRF and arbitrary target exploitation.
 */

export const DEMO_ROUTES = [
  {
    id: 'forms-problem',
    name: 'Forms Demo — Deliberately Flawed Fixture',
    path: '/demos/forms?mode=problem',
    category: 'Forms & Input Validation',
    expectedIssues: ['label', 'button-name', 'color-contrast'],
    description: 'Demonstrates missing form labels, non-semantic div buttons, unassociated errors, and color-only indicators.',
  },
  {
    id: 'forms-improved',
    name: 'Forms Demo — Remediated Semantic Fixture',
    path: '/demos/forms?mode=improved',
    category: 'Forms & Input Validation',
    expectedIssues: [],
    description: 'Demonstrates explicit labels, semantic submit buttons, aria-describedby error associations, and visible focus.',
  },
  {
    id: 'navigation-problem',
    name: 'Navigation Demo — Deliberately Flawed Fixture',
    path: '/demos/navigation?mode=problem',
    category: 'Keyboard & Navigation',
    expectedIssues: ['link-name', 'focus-order-semantics'],
    description: 'Demonstrates stripped focus outlines, div-based links without href, inaccessible hover-only dropdowns, and vague link labels.',
  },
  {
    id: 'navigation-improved',
    name: 'Navigation Demo — Remediated Semantic Fixture',
    path: '/demos/navigation?mode=improved',
    category: 'Keyboard & Navigation',
    expectedIssues: [],
    description: 'Demonstrates high-contrast focus rings, accessible disclosure menus, aria-expanded states, and descriptive links.',
  },
  {
    id: 'content-problem',
    name: 'Content Demo — Deliberately Flawed Fixture',
    path: '/demos/content?mode=problem',
    category: 'Content Structure & Media',
    expectedIssues: ['image-alt', 'heading-order', 'color-contrast'],
    description: 'Demonstrates missing/low-quality alt text, broken heading hierarchies (h1 to h4), and low text contrast.',
  },
  {
    id: 'content-improved',
    name: 'Content Demo — Remediated Semantic Fixture',
    path: '/demos/content?mode=improved',
    category: 'Content Structure & Media',
    expectedIssues: [],
    description: 'Demonstrates descriptive alternative text, logical heading structure, semantic landmarks, and WCAG AA contrast.',
  },
];

export const ALLOWED_SCAN_PATHS = DEMO_ROUTES.map((route) => route.path);

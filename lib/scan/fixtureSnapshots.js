export const FIXTURE_SNAPSHOTS = {
  "/demos/forms?mode=problem": {
    "id": "scan-1791893306732-911y",
    "pageName": "Forms Demo — Deliberately Flawed Fixture",
    "pageUrl": "/demos/forms?mode=problem",
    "scannedAt": "2026-10-13T12:08:26.655Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 3,
      "needsReviewCount": 0,
      "passesCount": 42,
      "inapplicableCount": 47,
      "criticalCount": 2,
      "seriousCount": 1,
      "moderateCount": 0,
      "minorCount": 0,
      "rulesChecked": 92
    },
    "violations": [
      {
        "id": "button-name",
        "impact": "critical",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-icon-btn"
            ],
            "html": "<button type=\"button\" id=\"flawed-icon-btn\" style=\"background:#2563eb;border:none;border-radius:4px;padding:0.625rem;cursor:pointer;display:inline-flex;align-items:center\">",
            "failureSummary": "Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "label",
        "impact": "critical",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "Fix any of the following:\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element has no placeholder attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
            "impact": "critical"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "Fix any of the following:\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element has no placeholder attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
            "impact": "critical"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "Fix any of the following:\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element has no placeholder attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
            "impact": "critical"
          }
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "minor",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Forms &amp; Validation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/forms?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"max-width:480px;display:flex;flex-direction:column;gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Account Username <span style=\"color:#ef4444\">*</span> (No &lt;label&gt; element, no accessible name)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > div > span"
            ],
            "html": "<span style=\"color:#ef4444\">*</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Corporate Email (Unassociated error message, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"color:#dc2626;font-size:0.8rem;margin-top:0.25rem\">Please enter a valid work email address</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Password (No programmatic required attribute, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(4)"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;align-items:center\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(4) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#64748b\">Icon Button with no accessible text (triggers <code>button-name</code>)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > div"
            ],
            "html": "<div style=\"display:inline-block;background:#475569;color:#fff;padding:0.625rem 1.25rem;border-radius:4px;cursor:pointer;font-weight:600;font-size:0.95rem;user-select:none\">Submit Registration (Clickable &lt;div&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin-top:0.35rem\">Try pressing <kbd>Tab</kbd> then <kbd>Enter</kbd> to submit. You will find it is impossible to focus or trigger with a keyboard.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "critical",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "minor",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Forms &amp; Validation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-critical"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/forms?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Account Username <span style=\"color:#ef4444\">*</span> (No &lt;label&gt; element, no accessible name)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Corporate Email (Unassociated error message, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"color:#dc2626;font-size:0.8rem;margin-top:0.25rem\">Please enter a valid work email address</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Password (No programmatic required attribute, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(4) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#64748b\">Icon Button with no accessible text (triggers <code>button-name</code>)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "span > code"
            ],
            "html": "<code>button-name</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > div"
            ],
            "html": "<div style=\"display:inline-block;background:#475569;color:#fff;padding:0.625rem 1.25rem;border-radius:4px;cursor:pointer;font-weight:600;font-size:0.95rem;user-select:none\">Submit Registration (Clickable &lt;div&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin-top:0.35rem\">Try pressing <kbd>Tab</kbd> then <kbd>Enter</kbd> to submit. You will find it is impossible to focus or trigger with a keyboard.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(1)"
            ],
            "html": "<kbd>Tab</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > p > kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>&lt;label for=\"id\"&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;div onClick&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(4)"
            ],
            "html": "<code>&lt;button&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code:nth-child(1)"
            ],
            "html": "<code>aria-describedby=\"error-id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-invalid=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "minor",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-icon-btn"
            ],
            "html": "<button type=\"button\" id=\"flawed-icon-btn\" style=\"background:#2563eb;border:none;border-radius:4px;padding:0.625rem;cursor:pointer;display:inline-flex;align-items:center\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Forms &amp; Validation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Forms &amp; Validation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1) > div"
            ],
            "html": "<div><span class=\"badge badge-critical\">Deliberately Flawed Fixture</span><h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-critical"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-heading"
            ],
            "html": "<h2 id=\"flawed-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form with Severe Accessibility Deficits</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/forms?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"max-width:480px;display:flex;flex-direction:column;gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Account Username <span style=\"color:#ef4444\">*</span> (No &lt;label&gt; element, no accessible name)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > div > span"
            ],
            "html": "<span style=\"color:#ef4444\">*</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Corporate Email (Unassociated error message, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"color:#dc2626;font-size:0.8rem;margin-top:0.25rem\">Please enter a valid work email address</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-heading\"] > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > div"
            ],
            "html": "<div style=\"font-size:0.85rem;color:#64748b;margin-bottom:0.25rem\">Password (No programmatic required attribute, missing &lt;label&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(4)"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;align-items:center\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-icon-btn"
            ],
            "html": "<button type=\"button\" id=\"flawed-icon-btn\" style=\"background:#2563eb;border:none;border-radius:4px;padding:0.625rem;cursor:pointer;display:inline-flex;align-items:center\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "svg"
            ],
            "html": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ffffff\" stroke-width=\"2\"><path d=\"M5 12h14M12 5l7 7-7 7\"></path></svg>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "path"
            ],
            "html": "<path d=\"M5 12h14M12 5l7 7-7 7\"></path>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(4) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#64748b\">Icon Button with no accessible text (triggers <code>button-name</code>)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "span > code"
            ],
            "html": "<code>button-name</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > div"
            ],
            "html": "<div style=\"display:inline-block;background:#475569;color:#fff;padding:0.625rem 1.25rem;border-radius:4px;cursor:pointer;font-weight:600;font-size:0.95rem;user-select:none\">Submit Registration (Clickable &lt;div&gt;)</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin-top:0.35rem\">Try pressing <kbd>Tab</kbd> then <kbd>Enter</kbd> to submit. You will find it is impossible to focus or trigger with a keyboard.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(1)"
            ],
            "html": "<kbd>Tab</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(5) > p > kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>&lt;label for=\"id\"&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;div onClick&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(4)"
            ],
            "html": "<code>&lt;button&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code:nth-child(1)"
            ],
            "html": "<code>aria-describedby=\"error-id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-invalid=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-username-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-username-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-email-input"
            ],
            "html": "<input type=\"text\" id=\"flawed-email-input\" style=\"width:100%;padding:0.625rem;border:1px solid #ef4444;border-radius:4px;font-size:0.95rem\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-password-input"
            ],
            "html": "<input type=\"password\" id=\"flawed-password-input\" style=\"width:100%;padding:0.625rem;border:1px solid #cbd5e1;border-radius:4px;font-size:0.95rem\" value=\"\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-icon-btn"
            ],
            "html": "<button type=\"button\" id=\"flawed-icon-btn\" style=\"background:#2563eb;border:none;border-radius:4px;padding:0.625rem;cursor:pointer;display:inline-flex;align-items:center\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "image-alt",
        "impact": "minor",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": []
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  },
  "/demos/forms?mode=improved": {
    "id": "scan-1791893308141-6yzt",
    "pageName": "Forms Demo — Remediated Semantic Fixture",
    "pageUrl": "/demos/forms?mode=improved",
    "scannedAt": "2026-10-13T12:08:28.063Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 1,
      "needsReviewCount": 0,
      "passesCount": 44,
      "inapplicableCount": 46,
      "criticalCount": 0,
      "seriousCount": 1,
      "moderateCount": 0,
      "minorCount": 0,
      "rulesChecked": 91
    },
    "violations": [
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-username\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\" style=\"color:#dc2626\">*</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-email\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\" style=\"color:#dc2626\">*</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-password\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\" style=\"color:#dc2626\">*</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "minor",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": [
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Forms &amp; Validation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/forms?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form"
            ],
            "html": "<form novalidate=\"\" style=\"max-width:480px;display:flex;flex-direction:column;gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-username\"]"
            ],
            "html": "<label for=\"acc-username\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Account Username <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-email\"]"
            ],
            "html": "<label for=\"acc-email\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Corporate Email <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-hint"
            ],
            "html": "<span id=\"email-hint\" style=\"display:block;font-size:0.8rem;color:#475569;margin-top:0.25rem\">We will send an account verification link to this address.</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-password\"]"
            ],
            "html": "<label for=\"acc-password\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Password <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "minor",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[type=\"submit\"]"
            ],
            "html": "<button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "minor",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Forms &amp; Validation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn-sm.btn"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-minor"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/forms?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-username\"]"
            ],
            "html": "<label for=\"acc-username\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Account Username <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-email\"]"
            ],
            "html": "<label for=\"acc-email\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Corporate Email <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-hint"
            ],
            "html": "<span id=\"email-hint\" style=\"display:block;font-size:0.8rem;color:#475569;margin-top:0.25rem\">We will send an account verification link to this address.</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-password\"]"
            ],
            "html": "<label for=\"acc-password\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Password <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[type=\"submit\"]"
            ],
            "html": "<button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>&lt;label for=\"id\"&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;div onClick&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(4)"
            ],
            "html": "<code>&lt;button&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code:nth-child(1)"
            ],
            "html": "<code>aria-describedby=\"error-id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-invalid=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-hint"
            ],
            "html": "<span id=\"email-hint\" style=\"display:block;font-size:0.8rem;color:#475569;margin-top:0.25rem\">We will send an account verification link to this address.</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "minor",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "label",
        "impact": "minor",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": [
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn-sm.btn"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[type=\"submit\"]"
            ],
            "html": "<button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Forms &amp; Validation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Forms &amp; Validation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Forms Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Compare a deliberately inaccessible registration form against a remediated, accessible implementation. Observe how automated testing detects missing labels while manual testing is necessary to confirm clear error guidance.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn-sm.btn"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div > div"
            ],
            "html": "<div><span class=\"badge badge-minor\">Remediated Semantic Fixture</span><h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-minor"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-heading"
            ],
            "html": "<h2 id=\"improved-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Registration Form Engineered for WCAG 2.1 &amp; 2.2 AA Conformance</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-heading\"] > div > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/forms?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form"
            ],
            "html": "<form novalidate=\"\" style=\"max-width:480px;display:flex;flex-direction:column;gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-username\"]"
            ],
            "html": "<label for=\"acc-username\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Account Username <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-username\"] > .sr-only"
            ],
            "html": "<span class=\"sr-only\">(required)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form > div:nth-child(2)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-email\"]"
            ],
            "html": "<label for=\"acc-email\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Corporate Email <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-email\"] > .sr-only"
            ],
            "html": "<span class=\"sr-only\">(required)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-hint"
            ],
            "html": "<span id=\"email-hint\" style=\"display:block;font-size:0.8rem;color:#475569;margin-top:0.25rem\">We will send an account verification link to this address.</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#email-error-msg"
            ],
            "html": "<div id=\"email-error-msg\" role=\"alert\" style=\"color:#b91c1c;font-size:0.85rem;font-weight:600;margin-top:0.25rem\">Please enter a valid work email address (e.g. name@company.com).</div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form > div:nth-child(3)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-password\"]"
            ],
            "html": "<label for=\"acc-password\" style=\"display:block;font-size:0.9rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem\">Password <span aria-hidden=\"true\" style=\"color:#dc2626\">*</span><span class=\"sr-only\">(required)</span></label>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "label[for=\"acc-password\"] > .sr-only"
            ],
            "html": "<span class=\"sr-only\">(required)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "form > div:nth-child(4)"
            ],
            "html": "<div><button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[type=\"submit\"]"
            ],
            "html": "<button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#analysis-heading"
            ],
            "html": "<h2 id=\"analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Forms</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. Missing &lt;label&gt; vs. Placeholder</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Placeholders disappear as soon as the user starts typing, placing a severe cognitive load on users with memory impairments. Screen readers often do not announce placeholders reliably as accessible names. Use explicit <code>&lt;label for=\"id\"&gt;</code>.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>&lt;label for=\"id\"&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">2. Clickable &lt;div&gt; vs. Native &lt;button&gt;</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;div onClick&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(2)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(4)"
            ],
            "html": "<code>&lt;button&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">3. Programmatic Error Associations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Without <code>aria-describedby=\"error-id\"</code> and <code>aria-invalid=\"true\"</code>, a blind screen reader user who tabs onto an invalid input will hear only the field name without knowing it contains an error or how to correct it.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code:nth-child(1)"
            ],
            "html": "<code>aria-describedby=\"error-id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-invalid=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > .sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-secondary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary[type=\"button\"]"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn-sm.btn"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fforms%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-username"
            ],
            "html": "<input id=\"acc-username\" type=\"text\" required=\"\" aria-required=\"true\" autocomplete=\"username\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"username\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-email"
            ],
            "html": "<input id=\"acc-email\" type=\"email\" required=\"\" aria-required=\"true\" aria-invalid=\"true\" aria-describedby=\"email-error-msg email-hint\" autocomplete=\"email\" style=\"width:100%;padding:0.625rem;border:2px solid #dc2626;border-radius:4px;font-size:0.95rem\" name=\"email\" value=\"invalid-email-value\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#acc-password"
            ],
            "html": "<input id=\"acc-password\" type=\"password\" required=\"\" aria-required=\"true\" autocomplete=\"new-password\" style=\"width:100%;padding:0.625rem;border:1px solid #94a3b8;border-radius:4px;font-size:0.95rem\" name=\"password\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[type=\"submit\"]"
            ],
            "html": "<button type=\"submit\" class=\"btn btn-primary\">Create Verified Account</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "image-alt",
        "impact": "minor",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": []
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  },
  "/demos/navigation?mode=problem": {
    "id": "scan-1791893309850-aaz5",
    "pageName": "Navigation Demo — Deliberately Flawed Fixture",
    "pageUrl": "/demos/navigation?mode=problem",
    "scannedAt": "2026-10-13T12:08:29.756Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 2,
      "needsReviewCount": 0,
      "passesCount": 41,
      "inapplicableCount": 49,
      "criticalCount": 0,
      "seriousCount": 2,
      "moderateCount": 0,
      "minorCount": 0,
      "rulesChecked": 92
    },
    "violations": [
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.67 (foreground color: #ffffff, background color: #3b82f6, font size: 10.0pt (13.3333px), font weight: normal). Expected contrast ratio of 4.5:1",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "minor",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Keyboard &amp; Navigation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/navigation?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#1e293b;color:#fff;padding:0.75rem 1rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-weight:700\">InaccessibleSite</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > a"
            ],
            "html": "<a style=\"color:#93c5fd;cursor:pointer;text-decoration:underline;outline:none\">Docs (No href attribute — Unreachable by Tab)</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".flawed-hover-menu"
            ],
            "html": "<div class=\"flawed-hover-menu\" style=\"position:relative;display:inline-block\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".flawed-hover-menu > span"
            ],
            "html": "<span style=\"color:#f8fafc;cursor:pointer;padding:0.25rem 0.5rem;border:1px dashed #64748b\">Products ▾ (Hover-only &lt;div&gt;)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#fef2f2;border:1px solid #fecaca;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#991b1b\">Ambiguous Link Purpose (Violates WCAG 2.4.4)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#audit-report\"]"
            ],
            "html": "<a href=\"#audit-report\" style=\"color:#2563eb;outline:none\">click here</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#regulations\"]"
            ],
            "html": "<a href=\"#regulations\" style=\"color:#2563eb;outline:none\">read more</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p:nth-child(3)"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#991b1b;margin:0\">Screen reader users frequently press <kbd>Caps Lock + F7</kbd> or <kbd>Insert + F7</kbd> to listen to an alphabetical list of links. Hearing “Click here” and “Read more” out of context leaves users completely disoriented.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "minor",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Keyboard &amp; Navigation</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-critical"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/navigation?mode=problem</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-weight:700\">InaccessibleSite</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > a"
            ],
            "html": "<a style=\"color:#93c5fd;cursor:pointer;text-decoration:underline;outline:none\">Docs (No href attribute — Unreachable by Tab)</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".flawed-hover-menu > span"
            ],
            "html": "<span style=\"color:#f8fafc;cursor:pointer;padding:0.25rem 0.5rem;border:1px dashed #64748b\">Products ▾ (Hover-only &lt;div&gt;)</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#991b1b\">Ambiguous Link Purpose (Violates WCAG 2.4.4)</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[href$=\"#audit-report\"]"
            ],
            "html": "<a href=\"#audit-report\" style=\"color:#2563eb;outline:none\">click here</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[href$=\"#regulations\"]"
            ],
            "html": "<a href=\"#regulations\" style=\"color:#2563eb;outline:none\">read more</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > p:nth-child(3)"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#991b1b;margin:0\">Screen reader users frequently press <kbd>Caps Lock + F7</kbd> or <kbd>Insert + F7</kbd> to listen to an alphabetical list of links. Hearing “Click here” and “Read more” out of context leaves users completely disoriented.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(1)"
            ],
            "html": "<kbd>Caps Lock + F7</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(2)"
            ],
            "html": "<kbd>Insert + F7</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "code:nth-child(1)"
            ],
            "html": "<code>aria-expanded=\"true|false\"</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-controls=\"id\"</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(4)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(5)"
            ],
            "html": "<kbd>Escape</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#991b1b\">Ambiguous Link Purpose (Violates WCAG 2.4.4)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "minor",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#991b1b\">Ambiguous Link Purpose (Violates WCAG 2.4.4)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": [
          {
            "target": [
              "a[href$=\"#audit-report\"]"
            ],
            "html": "<a href=\"#audit-report\" style=\"color:#2563eb;outline:none\">click here</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#regulations\"]"
            ],
            "html": "<a href=\"#regulations\" style=\"color:#2563eb;outline:none\">read more</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#audit-report\"]"
            ],
            "html": "<a href=\"#audit-report\" style=\"color:#2563eb;outline:none\">click here</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#regulations\"]"
            ],
            "html": "<a href=\"#regulations\" style=\"color:#2563eb;outline:none\">read more</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Keyboard &amp; Navigation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Keyboard &amp; Navigation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-nav-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1) > div"
            ],
            "html": "<div><span class=\"badge badge-critical\">Deliberately Flawed Fixture</span><h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-critical"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-nav-heading"
            ],
            "html": "<h2 id=\"flawed-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation with Inoperable Focus and Keyboard Traps</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/navigation?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#1e293b;color:#fff;padding:0.75rem 1rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-weight:700\">InaccessibleSite</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > a"
            ],
            "html": "<a style=\"color:#93c5fd;cursor:pointer;text-decoration:underline;outline:none\">Docs (No href attribute — Unreachable by Tab)</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".flawed-hover-menu"
            ],
            "html": "<div class=\"flawed-hover-menu\" style=\"position:relative;display:inline-block\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".flawed-hover-menu > span"
            ],
            "html": "<span style=\"color:#f8fafc;cursor:pointer;padding:0.25rem 0.5rem;border:1px dashed #64748b\">Products ▾ (Hover-only &lt;div&gt;)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#fef2f2;border:1px solid #fecaca;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#991b1b\">Ambiguous Link Purpose (Violates WCAG 2.4.4)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-nav-heading\"] > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#audit-report\"]"
            ],
            "html": "<a href=\"#audit-report\" style=\"color:#2563eb;outline:none\">click here</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"#regulations\"]"
            ],
            "html": "<a href=\"#regulations\" style=\"color:#2563eb;outline:none\">read more</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p:nth-child(3)"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#991b1b;margin:0\">Screen reader users frequently press <kbd>Caps Lock + F7</kbd> or <kbd>Insert + F7</kbd> to listen to an alphabetical list of links. Hearing “Click here” and “Read more” out of context leaves users completely disoriented.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(1)"
            ],
            "html": "<kbd>Caps Lock + F7</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(2)"
            ],
            "html": "<kbd>Insert + F7</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(1)"
            ],
            "html": "<code>aria-expanded=\"true|false\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-controls=\"id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(4)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(5)"
            ],
            "html": "<kbd>Escape</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > button"
            ],
            "html": "<button type=\"button\" style=\"background:#3b82f6;color:#fff;border:none;padding:0.4rem 0.8rem;border-radius:4px;cursor:pointer;outline:none\">Sign In (Focus outline: none)</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "image-alt",
        "impact": "minor",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "label",
        "impact": "minor",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  },
  "/demos/navigation?mode=improved": {
    "id": "scan-1791893311308-qwkv",
    "pageName": "Navigation Demo — Remediated Semantic Fixture",
    "pageUrl": "/demos/navigation?mode=improved",
    "scannedAt": "2026-10-13T12:08:31.230Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 1,
      "needsReviewCount": 2,
      "passesCount": 41,
      "inapplicableCount": 49,
      "criticalCount": 0,
      "seriousCount": 1,
      "moderateCount": 0,
      "minorCount": 0,
      "rulesChecked": 93
    },
    "violations": [
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      }
    ],
    "incomplete": [
      {
        "id": "aria-valid-attr-value",
        "impact": "critical",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "Fix all of the following:\n  Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: aria-controls=\"accessible-sub-menu\"",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">▾</span>",
            "failureSummary": "Fix any of the following:\n  Element content contains only non-text characters",
            "impact": "serious"
          }
        ]
      }
    ],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">▾</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "critical",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "critical"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Keyboard &amp; Navigation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/navigation?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > span"
            ],
            "html": "<span style=\"font-weight:700\">AccessiblePortal</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul"
            ],
            "html": "<ul style=\"display:flex;list-style:none;gap:1.25rem;margin:0;padding:0;align-items:center;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(1) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(2)"
            ],
            "html": "<li style=\"position:relative\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div"
            ],
            "html": "<div style=\"background:#f0fdf4;border:1px solid #bbf7d0;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#166534\">Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#14532d;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"methodology\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/methodology\">inspect the full WCAG 2.2 methodology and POUR principles report</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"checklist\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/checklist\">downloadable accessibility review checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "minor",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(3) > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "li:nth-child(5) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Keyboard &amp; Navigation</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-minor"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/navigation?mode=improved</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > span"
            ],
            "html": "<span style=\"font-weight:700\">AccessiblePortal</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "li:nth-child(1) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "li:nth-child(3) > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#166534\">Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#14532d;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "p > a[href$=\"methodology\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/methodology\">inspect the full WCAG 2.2 methodology and POUR principles report</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "p > a[href$=\"checklist\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/checklist\">downloadable accessibility review checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "code:nth-child(1)"
            ],
            "html": "<code>aria-expanded=\"true|false\"</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-controls=\"id\"</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(4)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "kbd:nth-child(5)"
            ],
            "html": "<kbd>Escape</kbd>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#166534\">Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "minor",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#166534\">Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(1) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"methodology\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/methodology\">inspect the full WCAG 2.2 methodology and POUR principles report</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"checklist\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/checklist\">downloadable accessibility review checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul"
            ],
            "html": "<ul style=\"display:flex;list-style:none;gap:1.25rem;margin:0;padding:0;align-items:center;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(2)"
            ],
            "html": "<li style=\"position:relative\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(3)"
            ],
            "html": "<li><button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(3) > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Keyboard &amp; Navigation</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Keyboard &amp; Navigation</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Navigation Accessibility Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Evaluate critical keyboard navigation barriers: suppressed focus rings, un-tabbable pseudo-links, hover-only dropdowns, and ambiguous link labels.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-nav-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1) > div"
            ],
            "html": "<div><span class=\"badge badge-minor\">Remediated Semantic Fixture</span><h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-minor"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-nav-heading"
            ],
            "html": "<h2 id=\"improved-nav-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Navigation Engineered with Focus Rings and ARIA Disclosures</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/navigation?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"]"
            ],
            "html": "<nav aria-label=\"Demo Secondary Navigation\" style=\"background:#0f172a;color:#fff;padding:0.75rem 1.25rem;border-radius:6px;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > span"
            ],
            "html": "<span style=\"font-weight:700\">AccessiblePortal</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul"
            ],
            "html": "<ul style=\"display:flex;list-style:none;gap:1.25rem;margin:0;padding:0;align-items:center;flex-wrap:wrap\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(1) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(2)"
            ],
            "html": "<li style=\"position:relative\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Demo Secondary Navigation\"] > ul > li:nth-child(3)"
            ],
            "html": "<li><button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(3) > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div"
            ],
            "html": "<div style=\"background:#f0fdf4;border:1px solid #bbf7d0;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:#166534\">Meaningful Link Purpose (Satisfies WCAG 2.4.4 Level A)</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-nav-heading\"] > div:nth-child(2) > div > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#14532d;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"methodology\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/methodology\">inspect the full WCAG 2.2 methodology and POUR principles report</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > a[href$=\"checklist\"]"
            ],
            "html": "<a style=\"color:#1d4ed8;font-weight:600;text-decoration:underline\" href=\"/checklist\">downloadable accessibility review checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"nav-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#nav-analysis-heading"
            ],
            "html": "<h2 id=\"nav-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Navigation &amp; Focus</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Danger of outline: none</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Hover-Only Menus vs. ARIA Disclosure</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"nav-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(1)"
            ],
            "html": "<code>aria-expanded=\"true|false\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>aria-controls=\"id\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(3)"
            ],
            "html": "<kbd>Enter</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(4)"
            ],
            "html": "<kbd>Space</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "kbd:nth-child(5)"
            ],
            "html": "<kbd>Escape</kbd>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Descriptive Links vs. “Click Here”</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">Links should make sense when read in isolation. Screen readers generate links-lists out of context. Every link text should clearly describe its destination or action.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .btn-secondary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fnavigation%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(1) > .nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" style=\"color:#f8fafc;font-weight:600\" href=\"/methodology\">Documentation</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button[aria-controls=\"accessible-sub-menu\"]"
            ],
            "html": "<button type=\"button\" aria-expanded=\"false\" aria-controls=\"accessible-sub-menu\" aria-haspopup=\"true\" style=\"background:transpare...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(3) > .btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-primary btn-sm\">Sign In to Portal</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "image-alt",
        "impact": "minor",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "label",
        "impact": "minor",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  },
  "/demos/content?mode=problem": {
    "id": "scan-1791893312912-kwd7",
    "pageName": "Content Demo — Deliberately Flawed Fixture",
    "pageUrl": "/demos/content?mode=problem",
    "scannedAt": "2026-10-13T12:08:32.846Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 4,
      "needsReviewCount": 0,
      "passesCount": 42,
      "inapplicableCount": 48,
      "criticalCount": 1,
      "seriousCount": 2,
      "moderateCount": 1,
      "minorCount": 0,
      "rulesChecked": 94
    },
    "violations": [
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#94a3b8;font-size:0.95rem;margin:0.5rem 0 0 0\">This paragraph text is styled with #94a3b8 against a #ffffff background. It fails the WCAG 1.4.3 AA minimum requirement of 4.5:1, rendering it nearly unreadable for users with low vision or when viewing under sunlight.</p>",
            "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.56 (foreground color: #94a3b8, background color: #ffffff, font size: 11.4pt (15.2px), font weight: normal). Expected contrast ratio of 4.5:1",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "moderate",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1.25rem;color:#991b1b;margin-top:0.5rem\">H4: Executive Summary (Direct child after H1!)</h4>",
            "failureSummary": "Fix any of the following:\n  Heading order invalid",
            "impact": "moderate"
          },
          {
            "target": [
              "h6"
            ],
            "html": "<h6 style=\"font-size:1rem;color:#991b1b;margin-top:0.5rem\">H6: Deeply Nested Subheading (Skipping H5)</h6>",
            "failureSummary": "Fix any of the following:\n  Heading order invalid",
            "impact": "moderate"
          }
        ]
      },
      {
        "id": "image-alt",
        "impact": "critical",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": [
          {
            "target": [
              "div:nth-child(1) > img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "minor",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Content &amp; Media</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/content?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#fef2f2;border:1px solid #fee2e2;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1.25rem;color:#991b1b;margin-top:0.5rem\">H4: Executive Summary (Direct child after H1!)</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">This section skips from H1 directly to H4, breaking the heading tree for screen reader rotor navigation.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h6"
            ],
            "html": "<h6 style=\"font-size:1rem;color:#991b1b;margin-top:0.5rem\">H6: Deeply Nested Subheading (Skipping H5)</h6>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#f8fafc;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">axe-core triggers rule: <code>image-alt</code></p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#f8fafc;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">Note: axe-core flags alt=\"image\" as redundant or suspicious!</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"background:#ffffff;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#94a3b8;font-size:0.95rem;margin:0.5rem 0 0 0\">This paragraph text is styled with #94a3b8 against a #ffffff background. It fails the WCAG 1.4.3 AA minimum requirement of 4.5:1, rendering it nearly unreadable for users with low vision or when viewing under sunlight.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "minor",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "serious",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "header > div > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Content &amp; Media</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > div > .badge-critical.badge"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/content?mode=problem</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Skipped Heading Hierarchy</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1.25rem;color:#991b1b;margin-top:0.5rem\">H4: Executive Summary (Direct child after H1!)</h4>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">This section skips from H1 directly to H4, breaking the heading tree for screen reader rotor navigation.</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "h6"
            ],
            "html": "<h6 style=\"font-size:1rem;color:#991b1b;margin-top:0.5rem\">H6: Deeply Nested Subheading (Skipping H5)</h6>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-critical.badge"
            ],
            "html": "<span class=\"badge badge-critical\">Image Missing Alt Attribute</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">axe-core triggers rule: <code>image-alt</code></p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p > code"
            ],
            "html": "<code>image-alt</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Uninformative Alt=\"image\"</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">Note: axe-core flags alt=\"image\" as redundant or suspicious!</p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Insufficient Color Contrast (2.5:1)</span>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p > code"
            ],
            "html": "<code>alt</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;h1&gt;</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>&lt;h4&gt;</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "div:nth-child(3) > p > code"
            ],
            "html": "<code>incomplete</code>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "serious"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "serious"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1.25rem;color:#991b1b;margin-top:0.5rem\">H4: Executive Summary (Direct child after H1!)</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h6"
            ],
            "html": "<h6 style=\"font-size:1rem;color:#991b1b;margin-top:0.5rem\">H6: Deeply Nested Subheading (Skipping H5)</h6>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "moderate",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "moderate"
          },
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "moderate"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "moderate"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "moderate"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "moderate"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "moderate"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "image-alt",
        "impact": "critical",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": [
          {
            "target": [
              "img[alt=\"image\"]"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"image\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "critical"
          }
        ]
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "div:nth-child(1) > img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "img[alt=\"image\"]"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"image\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "img[alt=\"image\"]"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"image\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Content &amp; Media</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > div > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Content &amp; Media</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"flawed-content-heading\" style=\"border:2px solid #ef4444;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #fee2e2;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1) > div"
            ],
            "html": "<div><span class=\"badge badge-critical\">Deliberately Flawed Fixture</span><h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .badge-critical.badge"
            ],
            "html": "<span class=\"badge badge-critical\">Deliberately Flawed Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#flawed-content-heading"
            ],
            "html": "<h2 id=\"flawed-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Content Hierarchy with Severe Alt and Structural Defects</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#b91c1c;font-weight:600\">Test Target: /demos/content?mode=problem</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#fef2f2;border:1px solid #fee2e2;padding:1rem;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Skipped Heading Hierarchy</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1.25rem;color:#991b1b;margin-top:0.5rem\">H4: Executive Summary (Direct child after H1!)</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#7f1d1d\">This section skips from H1 directly to H4, breaking the heading tree for screen reader rotor navigation.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h6"
            ],
            "html": "<h6 style=\"font-size:1rem;color:#991b1b;margin-top:0.5rem\">H6: Deeply Nested Subheading (Skipping H5)</h6>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#f8fafc;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-critical.badge"
            ],
            "html": "<span class=\"badge badge-critical\">Image Missing Alt Attribute</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">axe-core triggers rule: <code>image-alt</code></p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p > code"
            ],
            "html": "<code>image-alt</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#f8fafc;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Uninformative Alt=\"image\"</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#64748b;margin:0.35rem 0\">Note: axe-core flags alt=\"image\" as redundant or suspicious!</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "img[alt=\"image\"]"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"image\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"background:#ffffff;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > .badge-serious.badge"
            ],
            "html": "<span class=\"badge badge-serious\">Insufficient Color Contrast (2.5:1)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"flawed-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#94a3b8;font-size:0.95rem;margin:0.5rem 0 0 0\">This paragraph text is styled with #94a3b8 against a #ffffff background. It fails the WCAG 1.4.3 AA minimum requirement of 4.5:1, rendering it nearly unreadable for users with low vision or when viewing under sunlight.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p > code"
            ],
            "html": "<code>alt</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;h1&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "code:nth-child(2)"
            ],
            "html": "<code>&lt;h4&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code"
            ],
            "html": "<code>incomplete</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(2)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dproblem\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "label",
        "impact": "minor",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": []
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  },
  "/demos/content?mode=improved": {
    "id": "scan-1791893314326-wxc3",
    "pageName": "Content Demo — Remediated Semantic Fixture",
    "pageUrl": "/demos/content?mode=improved",
    "scannedAt": "2026-10-13T12:08:34.259Z",
    "engine": "axe-core",
    "engineVersion": "4.14.0",
    "status": "completed",
    "summary": {
      "totalViolations": 1,
      "needsReviewCount": 0,
      "passesCount": 42,
      "inapplicableCount": 48,
      "criticalCount": 0,
      "seriousCount": 1,
      "moderateCount": 0,
      "minorCount": 0,
      "rulesChecked": 91
    },
    "violations": [
      {
        "id": "label-content-name-mismatch",
        "impact": "serious",
        "description": "Ensure that elements labelled through their content must have their visible text as part of their accessible name",
        "help": "Elements must have their visible text as part of their accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI",
        "tags": [
          "cat.semantics",
          "wcag21a",
          "wcag253",
          "EN-301-549",
          "EN-9.2.5.3",
          "RGAAv4",
          "RGAA-6.1.5"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
            "impact": "serious"
          }
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "id": "aria-allowed-attr",
        "impact": "minor",
        "description": "Ensure an element's role supports its ARIA attributes",
        "help": "Elements must only use supported ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-allowed-role",
        "impact": "minor",
        "description": "Ensure role attribute has an appropriate value for the element",
        "help": "ARIA role should be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-allowed-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-conditional-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are used as described in the specification of the element's role",
        "help": "ARIA attributes must be used as specified for the element's role",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-deprecated-role",
        "impact": "minor",
        "description": "Ensure elements do not use deprecated roles",
        "help": "Deprecated ARIA roles must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-body",
        "impact": "minor",
        "description": "Ensure aria-hidden=\"true\" is not present on the document body.",
        "help": "aria-hidden=\"true\" must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "wcag412",
          "EN-301-549",
          "EN-9.1.3.1",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              "body"
            ],
            "html": "<body>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-hidden-focus",
        "impact": "minor",
        "description": "Ensure aria-hidden elements are not focusable nor contain focusable elements",
        "help": "ARIA hidden element must not be focusable or contain focusable elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-10.8.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\" style=\"font-size:2rem\">📊</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"] > span[aria-hidden=\"true\"]"
            ],
            "html": "<span aria-hidden=\"true\">↗</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-prohibited-attr",
        "impact": "minor",
        "description": "Ensure ARIA attributes are not prohibited for an element's role",
        "help": "Elements must only use permitted ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-attr",
        "impact": "minor",
        "description": "Ensure elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-required-children",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-roles",
        "impact": "minor",
        "description": "Ensure all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr-value",
        "impact": "minor",
        "description": "Ensure all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "aria-valid-attr",
        "impact": "minor",
        "description": "Ensure attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "avoid-inline-spacing",
        "impact": "minor",
        "description": "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",
        "help": "Inline text spacing must be adjustable with custom stylesheets",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/avoid-inline-spacing?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag21aa",
          "wcag1412",
          "EN-301-549",
          "EN-9.1.4.12",
          "ACT"
        ],
        "nodes": [
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Content &amp; Media</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/content?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article"
            ],
            "html": "<article style=\"background:#f8fafc;padding:1.25rem;border-radius:6px;border:1px solid #e2e8f0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > h3"
            ],
            "html": "<h3 style=\"font-size:1.2rem;color:#0f172a;margin-top:0\">H3: Executive Summary of Accessibility Progress</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.95rem;color:#334155\">This section follows logical hierarchy without skipping heading ranks, providing a clear outline for screen readers and search bots.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1rem;color:#1e293b;margin-top:0.75rem\">H4: Remediation Milestones</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p:nth-child(4)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#475569;margin:0\">Quarterly audits in 2026 achieved 88% overall conformance across critical user flows.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#f0fdf4;padding:1rem;border:1px solid #bbf7d0;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Conveys the exact data and conclusion of the visual chart.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#f0fdf4;padding:1rem;border:1px solid #bbf7d0;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Marked with empty <code>alt=\"\"</code> and <code>aria-hidden=\"true\"</code> to prevent chatter.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
            ],
            "html": "<div style=\"display:flex;align-items:center;gap:0.75rem;padding:1rem;background:#fff;border-radius:4px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div > div > p"
            ],
            "html": "<p style=\"margin:0;font-size:0.85rem;color:#475569\">Ignored cleanly by screen readers.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"background:#ffffff;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#0f172a;font-size:0.95rem;margin:0.5rem 0 0 0;font-weight:500\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "button-name",
        "impact": "minor",
        "description": "Ensure buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": [
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "bypass",
        "impact": "minor",
        "description": "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o",
          "TTv5",
          "TT9.a",
          "EN-301-549",
          "EN-9.2.4.1",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "color-contrast",
        "impact": "minor",
        "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
        "help": "Elements must meet minimum color contrast ratio thresholds",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143",
          "TTv5",
          "TT13.c",
          "EN-301-549",
          "EN-9.1.4.3",
          "ACT",
          "RGAAv4",
          "RGAA-3.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".brand-badge"
            ],
            "html": "<span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Content &amp; Media</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/content?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > h3"
            ],
            "html": "<h3 style=\"font-size:1.2rem;color:#0f172a;margin-top:0\">H3: Executive Summary of Accessibility Progress</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.95rem;color:#334155\">This section follows logical hierarchy without skipping heading ranks, providing a clear outline for screen readers and search bots.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1rem;color:#1e293b;margin-top:0.75rem\">H4: Remediation Milestones</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p:nth-child(4)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#475569;margin:0\">Quarterly audits in 2026 achieved 88% overall conformance across critical user flows.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Informative Alt Text</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Conveys the exact data and conclusion of the visual chart.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Decorative Media</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Marked with empty <code>alt=\"\"</code> and <code>aria-hidden=\"true\"</code> to prevent chatter.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>alt=\"\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p > code:nth-child(2)"
            ],
            "html": "<code>aria-hidden=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > strong"
            ],
            "html": "<strong>Decorative Metric Icon</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div > div > p"
            ],
            "html": "<p style=\"margin:0;font-size:0.85rem;color:#475569\">Ignored cleanly by screen readers.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">High-Contrast Text (15.3:1 Ratio)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#0f172a;font-size:0.95rem;margin:0.5rem 0 0 0;font-weight:500\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>alt</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;h1&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p > code:nth-child(2)"
            ],
            "html": "<code>&lt;h4&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code"
            ],
            "html": "<code>incomplete</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "document-title",
        "impact": "minor",
        "description": "Ensure each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242",
          "TTv5",
          "TT12.a",
          "EN-301-549",
          "EN-9.2.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.5.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "duplicate-id-aria",
        "impact": "minor",
        "description": "Ensure every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/duplicate-id-aria?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-8.2.1"
        ],
        "nodes": [
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "empty-heading",
        "impact": "minor",
        "description": "Ensure headings have discernible text",
        "help": "Headings should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-heading?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > h3"
            ],
            "html": "<h3 style=\"font-size:1.2rem;color:#0f172a;margin-top:0\">H3: Executive Summary of Accessibility Progress</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1rem;color:#1e293b;margin-top:0.75rem\">H4: Remediation Milestones</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "heading-order",
        "impact": "minor",
        "description": "Ensure the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/heading-order?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > h3"
            ],
            "html": "<h3 style=\"font-size:1.2rem;color:#0f172a;margin-top:0\">H3: Executive Summary of Accessibility Progress</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1rem;color:#1e293b;margin-top:0.75rem\">H4: Remediation Milestones</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-has-lang",
        "impact": "minor",
        "description": "Ensure every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "html-lang-valid",
        "impact": "minor",
        "description": "Ensure the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "TTv5",
          "TT11.a",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.4.1"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "image-alt",
        "impact": "minor",
        "description": "Ensure <img> elements have alternative text or a role of none or presentation",
        "help": "Images must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "TT7.b",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": [
          {
            "target": [
              "img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"Bar chart showing ac...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "image-redundant-alt",
        "impact": "minor",
        "description": "Ensure image alternative is not repeated as text",
        "help": "Alternative text of images should not be repeated as text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/image-redundant-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"Bar chart showing ac...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-banner-is-top-level",
        "impact": "minor",
        "description": "Ensure the banner landmark is at top level",
        "help": "Banner landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-banner-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-contentinfo-is-top-level",
        "impact": "minor",
        "description": "Ensure the contentinfo landmark is at top level",
        "help": "Contentinfo landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-contentinfo-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-main-is-top-level",
        "impact": "minor",
        "description": "Ensure the main landmark is at top level",
        "help": "Main landmark should not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-main-is-top-level?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-banner",
        "impact": "minor",
        "description": "Ensure the document has at most one banner landmark",
        "help": "Document should not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-banner?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-contentinfo",
        "impact": "minor",
        "description": "Ensure the document has at most one contentinfo landmark",
        "help": "Document should not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-contentinfo?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-no-duplicate-main",
        "impact": "minor",
        "description": "Ensure the document has at most one main landmark",
        "help": "Document should not have more than one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-no-duplicate-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-one-main",
        "impact": "minor",
        "description": "Ensure the document has a main landmark",
        "help": "Document should have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-one-main?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "landmark-unique",
        "impact": "minor",
        "description": "Ensure landmarks are unique",
        "help": "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/landmark-unique?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "link-name",
        "impact": "minor",
        "description": "Ensure links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-6.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "listitem",
        "impact": "minor",
        "description": "Ensure <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": [
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport-large",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport-large?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "meta-viewport",
        "impact": "minor",
        "description": "Ensure <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144",
          "EN-301-549",
          "EN-9.1.4.4",
          "ACT",
          "RGAAv4",
          "RGAA-10.4.2"
        ],
        "nodes": [
          {
            "target": [
              "meta[name=\"viewport\"]"
            ],
            "html": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "nested-interactive",
        "impact": "minor",
        "description": "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
        "help": "Interactive controls must not be nested",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": [
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"Bar chart showing ac...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "page-has-heading-one",
        "impact": "minor",
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page should contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/page-has-heading-one?application=axeAPI",
        "tags": [
          "cat.semantics",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "html"
            ],
            "html": "<html lang=\"en\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "region",
        "impact": "minor",
        "description": "Ensure all page content is contained by landmarks",
        "help": "All page content should be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-9.2.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-header"
            ],
            "html": "<header class=\"site-header\" role=\"banner\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".header-container"
            ],
            "html": "<div class=\"header-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-name"
            ],
            "html": "<span class=\"brand-name\">AccessLab</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-tagline"
            ],
            "html": "<span class=\"brand-tagline\">Web Accessibility Auditor</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".site-nav"
            ],
            "html": "<nav class=\"site-nav\" aria-label=\"Main Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list"
            ],
            "html": "<ul class=\"nav-list\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(1)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/\">Home</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(2)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/dashboard\">Dashboard</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(3)"
            ],
            "html": "<li><a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-list > li:nth-child(4)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "li:nth-child(5)"
            ],
            "html": "<li><a class=\"nav-link\" href=\"/methodology\">Methodology</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#main-content > div"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:2rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header"
            ],
            "html": "<header>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > header > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-bottom:0.5rem\"><a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a><span class=\"badge badge-serious\">Content &amp; Media</span></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-serious"
            ],
            "html": "<span class=\"badge badge-serious\">Content &amp; Media</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h1"
            ],
            "html": "<h1>Content Structure &amp; Media Demo</h1>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "header > p"
            ],
            "html": "<p style=\"max-width:800px;font-size:1.05rem\">Examine image alternative text deficiencies, skipped heading levels, and low-contrast text. Discover why automated tools catch missing alt attributes but cannot evaluate whether alt text is accurate.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2)"
            ],
            "html": "<div class=\"card\" style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.85rem;font-weight:700;text-transform:uppercase;color:var(--text-muted)\">Selected Fixture Mode:</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(1) > div"
            ],
            "html": "<div style=\"display:flex;gap:0.5rem;margin-top:0.35rem\"><button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button><button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div><a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"improved-content-heading\" style=\"border:2px solid #22c55e;background:#fff\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1)"
            ],
            "html": "<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #dcfce7;padding-bottom:0.75rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1) > div"
            ],
            "html": "<div><span class=\"badge badge-minor\">Remediated Semantic Fixture</span><h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > div > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Remediated Semantic Fixture</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#improved-content-heading"
            ],
            "html": "<h2 id=\"improved-content-heading\" style=\"font-size:1.25rem;margin-top:0.25rem\">Semantic Content with Descriptive Alternatives and High Contrast</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(1) > span"
            ],
            "html": "<span style=\"font-size:0.8rem;color:#15803d;font-weight:600\">Test Target: /demos/content?mode=improved</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2)"
            ],
            "html": "<div style=\"display:flex;flex-direction:column;gap:1.5rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article"
            ],
            "html": "<article style=\"background:#f8fafc;padding:1.25rem;border-radius:6px;border:1px solid #e2e8f0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > h3"
            ],
            "html": "<h3 style=\"font-size:1.2rem;color:#0f172a;margin-top:0\">H3: Executive Summary of Accessibility Progress</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "article > p:nth-child(2)"
            ],
            "html": "<p style=\"font-size:0.95rem;color:#334155\">This section follows logical hierarchy without skipping heading ranks, providing a clear outline for screen readers and search bots.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "h4"
            ],
            "html": "<h4 style=\"font-size:1rem;color:#1e293b;margin-top:0.75rem\">H4: Remediation Milestones</h4>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p:nth-child(4)"
            ],
            "html": "<p style=\"font-size:0.9rem;color:#475569;margin:0\">Quarterly audits in 2026 achieved 88% overall conformance across critical user flows.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"
            ],
            "html": "<div style=\"background:#f0fdf4;padding:1rem;border:1px solid #bbf7d0;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(1) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Informative Alt Text</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Conveys the exact data and conclusion of the visual chart.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "img"
            ],
            "html": "<img src=\"data:image/svg+xml;u...\" alt=\"Bar chart showing ac...\" style=\"max-width:100%;heigh...\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2)"
            ],
            "html": "<div style=\"background:#f0fdf4;padding:1rem;border:1px solid #bbf7d0;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">Decorative Media</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.8rem;color:#166534;margin:0.35rem 0 0.75rem 0\">Marked with empty <code>alt=\"\"</code> and <code>aria-hidden=\"true\"</code> to prevent chatter.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>alt=\"\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p > code:nth-child(2)"
            ],
            "html": "<code>aria-hidden=\"true\"</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
            ],
            "html": "<div style=\"display:flex;align-items:center;gap:0.75rem;padding:1rem;background:#fff;border-radius:4px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div"
            ],
            "html": "<div><strong>Decorative Metric Icon</strong><p style=\"margin:0;font-size:0.85rem;color:#475569\">Ignored cleanly by screen readers.</p></div>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div > strong"
            ],
            "html": "<strong>Decorative Metric Icon</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > div:nth-child(2) > div > div > p"
            ],
            "html": "<p style=\"margin:0;font-size:0.85rem;color:#475569\">Ignored cleanly by screen readers.</p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(3)"
            ],
            "html": "<div style=\"background:#ffffff;padding:1rem;border:1px solid #cbd5e1;border-radius:6px\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > .badge-minor.badge"
            ],
            "html": "<span class=\"badge badge-minor\">High-Contrast Text (15.3:1 Ratio)</span>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"improved-content-heading\"] > div:nth-child(2) > div:nth-child(3) > p"
            ],
            "html": "<p style=\"color:#0f172a;font-size:0.95rem;margin:0.5rem 0 0 0;font-weight:500\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"]"
            ],
            "html": "<section class=\"card\" aria-labelledby=\"content-analysis-heading\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "#content-analysis-heading"
            ],
            "html": "<h2 id=\"content-analysis-heading\" style=\"font-size:1.25rem;margin-top:0\">Accessibility Engineering Analysis: Content &amp; Media</h2>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div"
            ],
            "html": "<div style=\"display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;margin-top:1rem\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-critical-text)\">1. The Alt Text Quality Blind Spot</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(1) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(1) > p > code"
            ],
            "html": "<code>alt</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(2) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-serious-text)\">2. Logical Heading Tree</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p > code:nth-child(1)"
            ],
            "html": "<code>&lt;h1&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(2) > p > code:nth-child(2)"
            ],
            "html": "<code>&lt;h4&gt;</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3)"
            ],
            "html": "<div style=\"background:var(--bg-subtle);padding:1rem;border-radius:var(--radius-md)\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > h3"
            ],
            "html": "<h3 style=\"font-size:1rem;margin-top:0;color:var(--severity-moderate-text)\">3. Contrast Calculations</h3>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "section[aria-labelledby=\"content-analysis-heading\"] > div > div:nth-child(3) > p"
            ],
            "html": "<p style=\"font-size:0.88rem;margin:0\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "div:nth-child(3) > p > code"
            ],
            "html": "<code>incomplete</code>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "footer"
            ],
            "html": "<footer class=\"site-footer\" role=\"contentinfo\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-container"
            ],
            "html": "<div class=\"footer-container\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer"
            ],
            "html": "<div class=\"footer-disclaimer\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-disclaimer > p"
            ],
            "html": "<p>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "p > strong"
            ],
            "html": "<strong>Important Notice:</strong>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "nav[aria-label=\"Footer Navigation\"]"
            ],
            "html": "<nav aria-label=\"Footer Navigation\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links"
            ],
            "html": "<ul class=\"footer-links\" role=\"list\">",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(1)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(2)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(3)"
            ],
            "html": "<li><a class=\"footer-link\" href=\"/demos\">Interactive Demos</a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-links > li:nth-child(4)"
            ],
            "html": "<li><a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a></li>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".sr-only"
            ],
            "html": "<span class=\"sr-only\"> (opens in a new tab)</span>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "skip-link",
        "impact": "minor",
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice",
          "RGAAv4",
          "RGAA-12.7.1"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "tabindex",
        "impact": "minor",
        "description": "Ensure tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/tabindex?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": [
          {
            "target": [
              "#main-content"
            ],
            "html": "<main id=\"main-content\" tabindex=\"-1\" class=\"main-content\">",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      },
      {
        "id": "target-size",
        "impact": "minor",
        "description": "Ensure touch targets have sufficient size and space",
        "help": "All touch targets must be 24px large, or leave sufficient space",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/target-size?application=axeAPI",
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag22aa",
          "wcag258",
          "EN-301-549v4",
          "EN-9.2.5.8"
        ],
        "nodes": [
          {
            "target": [
              ".skip-link"
            ],
            "html": "<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".brand-wrapper"
            ],
            "html": "<a class=\"brand-wrapper\" aria-label=\"AccessLab Home — Web Accessibility Auditor\" href=\"/\"><span class=\"brand-badge\" aria-hidden=\"true\">A11Y</span><span class=\"brand-name\">AccessLab</span><span class=\"brand-tagline\">Web Accessibility Auditor</span></a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href=\"/\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/\">Home</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[href$=\"dashboard\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/dashboard\">Dashboard</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[aria-current=\"page\"]"
            ],
            "html": "<a class=\"nav-link\" aria-current=\"page\" href=\"/demos\">Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".nav-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"nav-link\" href=\"/methodology\">Methodology</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".badge-neutral"
            ],
            "html": "<a class=\"badge badge-neutral\" style=\"text-decoration:none\" href=\"/demos\">← Back to Demo Library</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "button:nth-child(1)"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-secondary\" aria-pressed=\"false\">⚠ Flawed Test Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".btn-primary"
            ],
            "html": "<button type=\"button\" class=\"btn btn-sm btn-primary\" aria-pressed=\"true\">✓ Remediated Semantic Fixture</button>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".card:nth-child(2) > div:nth-child(2) > .btn-secondary.btn.btn-sm"
            ],
            "html": "<a class=\"btn btn-secondary btn-sm\" href=\"/dashboard?target=%2Fdemos%2Fcontent%3Fmode%3Dimproved\">Audit this fixture with axe-core →</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"methodology\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/methodology\">Methodology &amp; POUR</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"checklist\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/checklist\">Manual Checklist</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              ".footer-link[href$=\"demos\"]"
            ],
            "html": "<a class=\"footer-link\" href=\"/demos\">Interactive Demos</a>",
            "failureSummary": "",
            "impact": "minor"
          },
          {
            "target": [
              "a[target=\"_blank\"]"
            ],
            "html": "<a href=\"https://www.w3.org/WAI/standards-guidelines/wcag/\" target=\"_blank\" rel=\"noreferrer noopener\" class=\"footer-link\">W3C WCAG Guidelines <span aria-hidden=\"true\">↗</span><span class=\"sr-only\"> (opens in a new tab)</span></a>",
            "failureSummary": "",
            "impact": "minor"
          }
        ]
      }
    ],
    "inapplicable": [
      {
        "id": "accesskeys",
        "impact": "minor",
        "description": "Ensure every accesskey attribute value is unique",
        "help": "accesskey attribute value should be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/accesskeys?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "area-alt",
        "impact": "minor",
        "description": "Ensure <area> elements of image maps have alternative text",
        "help": "Active <area> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag244",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.2.4.4",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-braille-equivalent",
        "impact": "minor",
        "description": "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",
        "help": "aria-braille attributes must have a non-braille equivalent",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-braille-equivalent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-command-name",
        "impact": "minor",
        "description": "Ensure every ARIA button, link and menuitem has an accessible name",
        "help": "ARIA commands must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-dialog-name",
        "impact": "minor",
        "description": "Ensure every ARIA dialog and alertdialog node has an accessible name",
        "help": "ARIA dialog and alertdialog nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-dialog-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-input-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA input field has an accessible name",
        "help": "ARIA input fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-meter-name",
        "impact": "minor",
        "description": "Ensure every ARIA meter node has an accessible name",
        "help": "ARIA meter nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-progressbar-name",
        "impact": "minor",
        "description": "Ensure every ARIA progressbar node has an accessible name",
        "help": "ARIA progressbar nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag111",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-required-parent",
        "impact": "minor",
        "description": "Ensure elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tab-name",
        "impact": "minor",
        "description": "Ensure every ARIA tab node has an accessible name",
        "help": "ARIA tab nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-text",
        "impact": "minor",
        "description": "Ensure role=\"text\" is used on elements with no focusable descendants",
        "help": "\"role=text\" should have no focusable descendants",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-text?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "aria-toggle-field-name",
        "impact": "minor",
        "description": "Ensure every ARIA toggle field has an accessible name",
        "help": "ARIA toggle fields must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-7.1.1"
        ],
        "nodes": []
      },
      {
        "id": "aria-tooltip-name",
        "impact": "minor",
        "description": "Ensure every ARIA tooltip node has an accessible name",
        "help": "ARIA tooltip nodes must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-tooltip-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "aria-treeitem-name",
        "impact": "minor",
        "description": "Ensure every ARIA treeitem node has an accessible name",
        "help": "ARIA treeitem nodes should have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/aria-treeitem-name?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "autocomplete-valid",
        "impact": "minor",
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135",
          "EN-301-549",
          "EN-9.1.3.5",
          "ACT",
          "RGAAv4",
          "RGAA-11.13.1"
        ],
        "nodes": []
      },
      {
        "id": "blink",
        "impact": "minor",
        "description": "Ensure <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "definition-list",
        "impact": "minor",
        "description": "Ensure <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "dlitem",
        "impact": "minor",
        "description": "Ensure <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.3"
        ],
        "nodes": []
      },
      {
        "id": "empty-table-header",
        "impact": "minor",
        "description": "Ensure table headers have discernible text",
        "help": "Table header text should not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/empty-table-header?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "form-field-multiple-labels",
        "impact": "minor",
        "description": "Ensure form field does not have multiple label elements",
        "help": "Form field must not have multiple label elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.3.3.2",
          "RGAAv4",
          "RGAA-11.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-focusable-content",
        "impact": "minor",
        "description": "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",
        "help": "Frames with focusable content must not have tabindex=-1",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "frame-tested",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames should be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-tested?application=axeAPI",
        "tags": [
          "cat.structure",
          "best-practice",
          "review-item"
        ],
        "nodes": []
      },
      {
        "id": "frame-title-unique",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.2.1"
        ],
        "nodes": []
      },
      {
        "id": "frame-title",
        "impact": "minor",
        "description": "Ensure <iframe> and <frame> elements have an accessible name",
        "help": "Frames must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.i",
          "TTv5",
          "TT12.d",
          "EN-301-549",
          "EN-9.4.1.2",
          "RGAAv4",
          "RGAA-2.1.1"
        ],
        "nodes": []
      },
      {
        "id": "html-xml-lang-mismatch",
        "impact": "minor",
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311",
          "EN-301-549",
          "EN-9.3.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-8.3.1"
        ],
        "nodes": []
      },
      {
        "id": "input-button-name",
        "impact": "minor",
        "description": "Ensure input buttons have discernible text",
        "help": "Input buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.9.1"
        ],
        "nodes": []
      },
      {
        "id": "input-image-alt",
        "impact": "minor",
        "description": "Ensure <input type=\"image\"> elements have alternative text",
        "help": "Image buttons must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.3"
        ],
        "nodes": []
      },
      {
        "id": "label-title-only",
        "impact": "minor",
        "description": "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label-title-only?application=axeAPI",
        "tags": [
          "cat.forms",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "label",
        "impact": "minor",
        "description": "Ensure every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "link-in-text-block",
        "impact": "minor",
        "description": "Ensure links are distinguished from surrounding text in a way that does not rely on color",
        "help": "Links must be distinguishable without relying on color",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI",
        "tags": [
          "cat.color",
          "wcag2a",
          "wcag141",
          "TTv5",
          "TT13.a",
          "EN-301-549",
          "EN-9.1.4.1",
          "RGAAv4",
          "RGAA-10.6.1"
        ],
        "nodes": []
      },
      {
        "id": "list",
        "impact": "minor",
        "description": "Ensure that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI",
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-9.3.1"
        ],
        "nodes": []
      },
      {
        "id": "marquee",
        "impact": "minor",
        "description": "Ensure <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI",
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222",
          "TTv5",
          "TT2.b",
          "EN-301-549",
          "EN-9.2.2.2",
          "RGAAv4",
          "RGAA-13.8.1"
        ],
        "nodes": []
      },
      {
        "id": "meta-refresh",
        "impact": "minor",
        "description": "Ensure <meta http-equiv=\"refresh\"> is not used for delayed refresh",
        "help": "Delayed refresh under 20 hours must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag221",
          "TTv5",
          "TT8.a",
          "EN-301-549",
          "EN-9.2.2.1",
          "RGAAv4",
          "RGAA-13.1.2"
        ],
        "nodes": []
      },
      {
        "id": "object-alt",
        "impact": "minor",
        "description": "Ensure <object> elements have alternative text",
        "help": "<object> elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "RGAAv4",
          "RGAA-1.1.6"
        ],
        "nodes": []
      },
      {
        "id": "presentation-role-conflict",
        "impact": "minor",
        "description": "Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",
        "help": "Elements marked as presentational should be consistently ignored",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/presentation-role-conflict?application=axeAPI",
        "tags": [
          "cat.aria",
          "best-practice",
          "ACT"
        ],
        "nodes": []
      },
      {
        "id": "role-img-alt",
        "impact": "minor",
        "description": "Ensure [role=\"img\"] and [role=\"image\"] elements have alternative text",
        "help": "[role=\"img\"] and [role=\"image\"] elements must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.1"
        ],
        "nodes": []
      },
      {
        "id": "scope-attr-valid",
        "impact": "minor",
        "description": "Ensure the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scope-attr-valid?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice"
        ],
        "nodes": []
      },
      {
        "id": "scrollable-region-focusable",
        "impact": "minor",
        "description": "Ensure elements that have scrollable content are accessible by keyboard in Safari",
        "help": "Scrollable region must have keyboard access",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI",
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag211",
          "wcag213",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "EN-9.2.1.3",
          "RGAAv4",
          "RGAA-7.3.2"
        ],
        "nodes": []
      },
      {
        "id": "select-name",
        "impact": "minor",
        "description": "Ensure select element has an accessible name",
        "help": "Select element must have an accessible name",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI",
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.n",
          "TTv5",
          "TT5.c",
          "EN-301-549",
          "EN-9.4.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-11.1.1"
        ],
        "nodes": []
      },
      {
        "id": "server-side-image-map",
        "impact": "minor",
        "description": "Ensure that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f",
          "TTv5",
          "TT4.a",
          "EN-301-549",
          "EN-9.2.1.1",
          "RGAAv4",
          "RGAA-1.1.4"
        ],
        "nodes": []
      },
      {
        "id": "summary-name",
        "impact": "minor",
        "description": "Ensure summary elements have discernible text",
        "help": "Summary elements must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/summary-name?application=axeAPI",
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT6.a",
          "EN-301-549",
          "EN-9.4.1.2"
        ],
        "nodes": []
      },
      {
        "id": "svg-img-alt",
        "impact": "minor",
        "description": "Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",
        "help": "<svg> elements with an img or image role must have alternative text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT7.a",
          "EN-301-549",
          "EN-9.1.1.1",
          "ACT",
          "RGAAv4",
          "RGAA-1.1.5"
        ],
        "nodes": []
      },
      {
        "id": "table-duplicate-name",
        "impact": "minor",
        "description": "Ensure the <caption> element does not contain the same text as the summary attribute",
        "help": "Tables should not have the same summary and caption",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI",
        "tags": [
          "cat.tables",
          "best-practice",
          "RGAAv4",
          "RGAA-5.2.1"
        ],
        "nodes": []
      },
      {
        "id": "td-headers-attr",
        "impact": "minor",
        "description": "Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",
        "help": "Table cell headers attributes must refer to other <th> elements in the same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.4"
        ],
        "nodes": []
      },
      {
        "id": "th-has-data-cells",
        "impact": "minor",
        "description": "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
        "help": "Table headers in a data table must refer to data cells",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI",
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g",
          "TTv5",
          "TT14.b",
          "EN-301-549",
          "EN-9.1.3.1",
          "RGAAv4",
          "RGAA-5.7.1"
        ],
        "nodes": []
      },
      {
        "id": "valid-lang",
        "impact": "minor",
        "description": "Ensure lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI",
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312",
          "TTv5",
          "TT11.b",
          "EN-301-549",
          "EN-9.3.1.2",
          "ACT",
          "RGAAv4",
          "RGAA-8.8.1"
        ],
        "nodes": []
      },
      {
        "id": "video-caption",
        "impact": "minor",
        "description": "Ensure <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI",
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a",
          "TTv5",
          "TT17.a",
          "EN-301-549",
          "EN-9.1.2.2",
          "RGAAv4",
          "RGAA-4.3.1"
        ],
        "nodes": []
      },
      {
        "id": "no-autoplay-audio",
        "impact": "minor",
        "description": "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
        "help": "<video> or <audio> elements must not play automatically",
        "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI",
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag142",
          "TTv5",
          "TT2.a",
          "EN-301-549",
          "EN-9.1.4.2",
          "ACT",
          "RGAAv4",
          "RGAA-4.10.1"
        ],
        "nodes": []
      }
    ]
  }
};

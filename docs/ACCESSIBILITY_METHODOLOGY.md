# AccessLab Accessibility Methodology

## 1. Introduction and Purpose

AccessLab is a developer-focused accessibility auditing and learning platform. Its mission is to bridge the gap between automated linting/auditing and real-world human accessibility.

> **Core Philosophy:** Accessibility is a civil right and a software engineering discipline. Automated test engines are essential for catching regressions and baseline violations at scale, but they cannot evaluate human context, comprehension, or usability. A "zero automated violations" result does not prove WCAG conformance.

---

## 2. Understanding Accessibility Standards

### The POUR Principles (WCAG 2.1 / 2.2)
The Web Content Accessibility Guidelines (WCAG) are organized under four core principles:

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
   - Text alternatives for non-text content (WCAG 1.1.1)
   - Captions and media alternatives (WCAG 1.2)
   - Adaptable content structure and meaningful sequence (WCAG 1.3)
   - Distinguishable content: minimum contrast 4.5:1 for normal text (WCAG 1.4.3), non-text contrast 3:1 (WCAG 1.4.11), reflow without 2D scrolling at 400% zoom (WCAG 1.4.10).

2. **Operable**: User interface components and navigation must be operable.
   - All functionality available from a keyboard without trapped focus (WCAG 2.1.1, 2.1.2)
   - Sufficient time to read and interact with content (WCAG 2.2)
   - Avoiding seizure and physical reactions: flashes below threshold (WCAG 2.3)
   - Navigable: skip links, page titles, focus order, link purpose, headings, and visible focus indicators (WCAG 2.4.1 through 2.4.11)
   - Input modalities: touch targets at least 24×24px (WCAG 2.5.8 Level AA) or 44×44px (Level AAA).

3. **Understandable**: Information and the operation of user interface must be understandable.
   - Readable: declared page language (WCAG 3.1.1)
   - Predictable: on focus and on input behavior does not trigger unexpected context changes (WCAG 3.2.1, 3.2.2)
   - Input assistance: clear error identification, text instructions, error suggestions, and prevention of legal/financial errors (WCAG 3.3.1 through 3.3.4).

4. **Robust**: Content must be robust enough that it can be reliably interpreted by a wide variety of user agents, including assistive technologies.
   - Valid, semantic markup and correct roles, states, and accessible names (WCAG 4.1.2, 4.1.3).

---

## 3. Conformance Levels: A, AA, and AAA

| Level | Meaning & Application |
|---|---|
| **Level A** | Basic web accessibility requirements. Without these, assistive technology users encounter complete blockers (e.g., unlabeled buttons, keyboard traps, missing alt attributes). |
| **Level AA** | The recognized international legal and institutional benchmark (ADA, Section 508, EN 301 549). Addresses the most common barriers including contrast, visible focus, resize, and consistent navigation. |
| **Level AAA** | Advanced, specialized accessibility criteria (e.g., sign language interpretation, 7:1 contrast ratio, comprehensive plain language). Not universally required for entire websites, but targeted sections should aim for it where feasible. |

---

## 4. Automated Testing with axe-core

AccessLab utilizes **axe-core** by Deque Systems. axe-core is engineered to eliminate false positives in automated testing: if axe reports a violation, there is near 100% certainty that an accessibility requirement was violated.

### Results Classification
axe-core categorizes test results into four distinct buckets:

1. **Violations (`violations`)**: Elements that definitively fail a rule. These require remediation.
2. **Passes (`passes`)**: Elements that were tested and satisfied the rule criteria.
3. **Incomplete (`incomplete`)**: Elements that axe could not definitively pass or fail without human judgment. *AccessLab treats these strictly as "Needs Manual Review" items rather than silent passes.* Examples include semi-transparent backgrounds over complex gradients where contrast calculation cannot be mathematically guaranteed.
4. **Inapplicable (`inapplicable`)**: Rules that do not apply to the tested page (e.g., checking video captions when no `<video>` element exists).

---

## 5. What Automated Scanners Catch vs. What They Miss

Automated scanners like axe-core typically catch **30% to 40%** of accessibility barriers. Here is an honest appraisal:

### What Automated Scans Catch Well:
- Missing alternative text (`<img src="pic.jpg">` with no `alt`).
- Missing form control labels (`<input>` without associated `<label>`, `aria-label`, or `aria-labelledby`).
- Low mathematical color contrast on static, solid backgrounds.
- Duplicate element IDs (`id="..."`) that break ARIA associations.
- Invalid ARIA attributes, roles, or children according to the WAI-ARIA specification.
- Missing document language (`<html lang="en">`).
- Broken heading hierarchies in structured markup.

### What Automated Scans Cannot Catch:
- **Quality and accuracy of alternative text**: An image of an invoice with `alt="image"` passes automated checks, but completely fails the user.
- **Keyboard usability and logical focus order**: While automated tools can detect `tabindex > 0`, they cannot assess whether tab order matches the visual reading flow or if a modal dialog properly traps and restores focus.
- **Focus visibility quality**: Automated tools cannot verify whether a custom focus ring is sufficiently distinguishable across dynamic background colors.
- **Screen reader reading order and announcements**: Automated tools cannot test whether live regions announce timely updates or whether custom widgets read aloud intuitively.
- **Cognitive accessibility**: Jargon, complex instructions, timeout frustration, and distracting layouts.

---

## 6. AccessLab's Audit Workflow

To provide high-fidelity reporting, AccessLab implements a dual-track audit model:

```
┌────────────────────────────────────────────────────────┐
│                   Target Webpage                       │
└───────────┬────────────────────────────────┬───────────┘
            │                                │
            ▼                                ▼
   ┌─────────────────┐             ┌────────────────────┐
   │ Automated Scan  │             │  Manual Checklist  │
   │  with axe-core  │             │   (Human Review)   │
   └────────┬────────┘             └─────────┬──────────┘
            │                                │
   ┌────────▼────────┐                       │
   │  Violations &   │                       │
   │ Incomplete data │                       │
   └────────┬────────┘                       │
            │                                │
            └───────────────┬────────────────┘
                            ▼
              ┌───────────────────────────┐
              │ Combined AccessLab Report │
              │ - Impact breakdown        │
              │ - Code snippets & fixes   │
              │ - Manual audit status     │
              └───────────────────────────┘
```

---

## 7. Official References & Authoritative Guidance

- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [W3C WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [Deque axe-core Rule Documentation](https://dequeuniversity.com/rules/axe/)
- [The A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Web Docs: Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

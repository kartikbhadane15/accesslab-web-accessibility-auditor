# AccessLab — Comprehensive Test Plan

## 1. Scope & Objectives

The AccessLab test plan verifies both:
1. The **accessibility, performance, and functionality of AccessLab itself**.
2. The **accuracy and fidelity of the automated scanning engine** running against controlled test fixtures.

---

## 2. Test Execution Matrix

| Test Suite | File | Coverage Area | Tooling |
|---|---|---|---|
| **Platform Accessibility** | `tests/accessibility/app.spec.js` | Audits `/`, `/dashboard`, `/demos`, `/checklist`, `/methodology` for 0 axe violations | Playwright + axe-core |
| **Keyboard Skip Link** | `tests/accessibility/app.spec.js` | Tab navigation, visible outline, focus transfer to `#main-content` | Playwright Keyboard API |
| **Forms Fixture Comparison** | `tests/accessibility/demos.spec.js` | Verifies `label` and `button-name` violations on flawed fixture; 0 on improved | Playwright + axe-core |
| **Navigation Fixture Comparison** | `tests/accessibility/demos.spec.js` | Verifies navigation barriers on flawed fixture; 0 on improved | Playwright + axe-core |
| **Content Fixture Comparison** | `tests/accessibility/demos.spec.js` | Verifies `image-alt` and `heading-order` violations on flawed fixture; 0 on improved | Playwright + axe-core |
| **Security SSRF Rejection** | `tests/accessibility/scanner.spec.js` | Tests that unapproved external URLs receive 400 Bad Request | Playwright API Request |
| **Authorized API Scan** | `tests/accessibility/scanner.spec.js` | Tests `POST /api/scan` on valid fixture, checks normalized structure | Playwright API Request |
| **E2E Dashboard Journey** | `tests/accessibility/scanner.spec.js` | Select fixture, trigger scan, view findings, expand remediation drawer | Playwright E2E |

---

## 3. Manual Testing Protocol for AccessLab Interface

### Keyboard Operation
1. Load AccessLab in Chrome/Safari/Firefox.
2. Unplug the mouse.
3. Press `Tab` repeatedly:
   - Ensure the skip link appears at the very top.
   - Press `Enter` on the skip link and verify focus moves into the main landmark.
   - Continue tabbing through nav links, mode toggles, filter dropdowns, and buttons.
   - Verify focus indicator is never hidden and always displays a 3px high-contrast outline.

### 200% and 400% Zoom / Reflow (WCAG 1.4.4 & 1.4.10)
1. Open browser settings and zoom page to 200%. Verify that no text is truncated or overlaps controls.
2. Zoom to 400% (or resize viewport to 320px width). Verify that no horizontal scrollbar appears on the main document and all content stacks cleanly.

### High Contrast & Reduced Motion (WCAG 1.4.3 & 2.3.3)
1. Verify body text (#0f172a on #ffffff) achieves 15.3:1 contrast ratio.
2. Toggle OS system setting `Prefers Reduced Motion` to "Reduce". Verify all CSS animations and transitions are disabled.

### Screen Reader Spot Check (VoiceOver on macOS)
1. Start VoiceOver with `Cmd + F5`.
2. Navigate landmarks using `VO + U` (Landmarks menu). Verify `<header>`, `<nav>`, `<main>`, and `<footer>` are clearly announced.
3. Navigate findings table using `VO + Arrow keys`. Verify column headers announce role and scope.

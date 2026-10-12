# AccessLab — Web Accessibility Auditor
## Detailed Project Roadmap and Antigravity Build Specification

**Goal:** Build a polished, portfolio-ready web accessibility auditing tool aligned with a Web Accessibility Engineer role. The project should demonstrate practical understanding of semantic HTML, keyboard accessibility, WCAG, automated testing, issue triage, debugging, and clear remediation guidance.

**Important:** AccessLab is a developer-support tool, not a certification system. Automated checks cannot detect every accessibility barrier. Clearly distinguish automated findings from manual review tasks, and never claim that a website is “fully accessible” based only on a score.

---

## 1. Product vision

AccessLab helps a developer or designer inspect a webpage, understand common accessibility problems, reproduce them, and learn how to fix them.

### Primary user journey
1. Open AccessLab.
2. Enter a URL **or** choose a built-in demo page.
3. Run an accessibility scan.
4. View a summary of findings by severity and rule.
5. Open an issue to inspect the affected element, explanation, impact, and remediation.
6. Use the demo page to reproduce the problem and compare an inaccessible example with an improved implementation.
7. Export a clear report for follow-up work.
8. Review a manual testing checklist that automated tools cannot replace.

### Target users
- Frontend developers
- Web designers
- QA engineers
- Students learning web accessibility
- Teams documenting accessibility remediation

### Core product principles
- Accessible by default: the AccessLab interface itself must be tested.
- Honest reporting: distinguish automated violations, needs-review items, and manual checks.
- Actionable findings: show what failed, where, why it matters, and how to improve it.
- Privacy and safety: do not transmit page content to an unknown server; explain what is scanned and where.
- Evidence over decoration: prioritize clear findings, reproducible steps, and useful code examples.

---

## 2. Recommended technology stack

Use JavaScript, not TypeScript, for this project.

- **Framework:** Next.js with JavaScript and App Router
- **UI:** React
- **Styling:** CSS Modules or plain CSS; use a small, consistent design system
- **Accessibility engine:** `@axe-core/playwright` for end-to-end browser scans, and/or `axe-core` in a controlled browser context
- **Browser automation:** Playwright
- **Unit/component tests:** Vitest and React Testing Library (optional if setup complexity becomes a blocker)
- **Charts:** Prefer simple accessible summary cards and HTML tables; only add charts if they provide real value
- **Version control:** Git and GitHub
- **Deployment:** Vercel for the UI; if server-side URL scanning is implemented, deploy the scanner separately or use a controlled same-origin demo approach
- **Documentation:** Markdown

### Important architecture decision
A normal web page cannot safely and reliably scan arbitrary third-party URLs by simply fetching them in browser JavaScript. Cross-origin restrictions, authentication, dynamic content, and server-side request forgery (SSRF) risks make arbitrary URL scanning non-trivial.

**Recommended MVP:** Start with built-in demo pages and scan those using Playwright + axe-core. Add external URL scanning only after the MVP works and only through a secure, restricted scanner service. Do not create an unrestricted server endpoint that fetches any URL supplied by a user.

---

## 3. MVP scope

Build these features first.

### A. Landing page
- Product name and short explanation
- Main CTA: “Run a demo audit”
- Explain automated checks versus manual testing
- Show a small example issue card
- Links to Dashboard, Demo pages, Methodology, and About

### B. Audit dashboard
Display:
- Total automated violations
- Critical/serious/moderate/minor counts when the engine supplies impact
- Number of rules checked or result categories, with accurate labels
- “Needs manual review” count, if the checklist is implemented
- Recent demo scans
- A clear statement that results depend on the selected page and scan conditions

Do not invent a single “accessibility score” unless its calculation is clearly documented. Prefer counts and categories that can be traced to actual scan results.

### C. Demo page library
Create three local sample pages:
1. **Forms demo:** missing label, unclear error, required-field feedback
2. **Navigation demo:** missing/weak focus styling, non-semantic clickable element, keyboard interaction problem
3. **Content demo:** image alternative text examples, heading hierarchy, landmark examples

For each demo, include:
- A deliberately flawed version for testing
- A corrected version
- A short note describing which issues automated tools can and cannot detect

Keep intentionally inaccessible examples isolated in the demo area. Do not make the overall application inaccessible just to demonstrate an issue.

### D. Scan results
- Run axe-core against a local demo route using Playwright
- Show scan status: queued/running/completed/failed
- Show timestamp, page name/URL, tool version where practical, and scan scope
- Render results from actual scan output rather than hard-coded fake results
- Provide loading, empty, and error states
- Keep results understandable when no violations are found

### E. Issue details
For each finding, display:
- Rule ID and human-readable title
- Impact/severity supplied by the engine
- WCAG tags/success criteria supplied by the rule metadata, with a link to authoritative documentation when available
- What the rule checks
- Why the issue can affect users
- Affected element or selector
- A short, safely escaped HTML snippet where available
- How to reproduce or inspect it
- Suggested remediation
- “Automated finding” label
- Caveat that context-sensitive issues may need manual confirmation

Do not display raw HTML as executable markup. Escape it or render it as text.

### F. Manual testing checklist
Create a checkable checklist with categories:
- Keyboard-only navigation
- Visible focus
- Focus order and focus not obscured
- Skip link and landmarks
- Page title and language
- Headings and page structure
- Form labels, instructions, and error handling
- Zoom/reflow and text resizing
- Contrast verification
- Screen-reader spot checks
- Accessible names and states
- Captions/transcripts where relevant

Each item should include:
- What to test
- How to test
- Expected result
- Status: Not tested / Pass / Needs work / Not applicable
- Optional notes

Make it clear that checklist results are user-entered manual observations, not automated conclusions.

### G. Report export
- Export scan findings as JSON
- Export a readable HTML report or CSV if time allows
- Include scan date, page, tool/version, finding count, rule IDs, impacts, WCAG tags, selectors, and remediation references
- Escape content properly and avoid including secrets or sensitive page data
- Do not claim formal conformance or certification

### H. Documentation
README should include:
- Problem statement
- Features
- Screenshots/GIF
- Tech stack
- Local setup
- How scanning works
- Automated testing limitations
- Manual test methodology
- Accessibility choices in AccessLab itself
- Known limitations
- Roadmap
- Live demo and repository links

---

## 4. Suggested application structure

Adapt this structure to the current Next.js version. Keep components small and reusable.

```text
accesslab/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── dashboard/
│   │   └── page.js
│   ├── demos/
│   │   ├── page.js
│   │   ├── forms/
│   │   │   └── page.js
│   │   ├── navigation/
│   │   │   └── page.js
│   │   └── content/
│   │       └── page.js
│   ├── results/
│   │   └── [scanId]/
│   │       └── page.js
│   ├── methodology/
│   │   └── page.js
│   └── globals.css
├── components/
│   ├── AppHeader.js
│   ├── AppFooter.js
│   ├── PageHeading.js
│   ├── SummaryCard.js
│   ├── SeverityBadge.js
│   ├── FindingsTable.js
│   ├── FindingDetails.js
│   ├── ManualChecklist.js
│   ├── ScanStatus.js
│   └── EmptyState.js
├── lib/
│   ├── scan/
│   │   ├── runDemoScan.js
│   │   ├── normalizeResults.js
│   │   └── scanTypes.js
│   ├── report/
│   │   └── exportReport.js
│   └── accessibility/
│       └── checklist.js
├── tests/
│   ├── accessibility/
│   │   ├── app.spec.js
│   │   ├── demos.spec.js
│   │   └── scanner.spec.js
│   └── unit/
├── public/
├── docs/
│   ├── PROJECT_ROADMAP.md
│   ├── TEST_PLAN.md
│   └── ACCESSIBILITY_METHODOLOGY.md
├── README.md
├── package.json
└── .gitignore
```

**Note:** Playwright scanner code should run in a Node.js test/worker environment, not in a client component. If the app exposes a scan API route, constrain it to known local demo routes in the MVP. Avoid using a user-provided URL directly as a server-side fetch target.

---

## 5. Detailed build phases

### Phase 0 — Understand the standards (half day to one day)
Learn enough to explain:
- WCAG principles: Perceivable, Operable, Understandable, Robust (POUR)
- Difference between WCAG conformance levels A, AA, AAA
- Semantic HTML and accessible names
- Keyboard focus and keyboard operation
- Contrast, reflow, zoom, labels, and errors
- What axe-core can catch and what it cannot
- Difference between an automated violation and a confirmed user impact

**Deliverable:** `docs/ACCESSIBILITY_METHODOLOGY.md` with links to official WCAG/WAI and axe-core documentation.

### Phase 1 — Scaffold and design (day 1)
Tasks:
1. Create a Next.js JavaScript project.
2. Add a clean, responsive layout and navigation.
3. Define colors, typography, spacing, focus ring, borders, and button styles.
4. Use semantic landmarks: header, nav, main, footer.
5. Add a skip link.
6. Make all controls keyboard operable.
7. Add a visible page title and meaningful document title.
8. Test at mobile and desktop widths.

**Acceptance criteria:**
- No TypeScript files unless absolutely required by generated tooling; use JavaScript.
- No horizontal scrolling at normal mobile viewport widths for the main UI.
- All links and buttons have meaningful names.
- Focus is visible and not removed without replacement.
- Heading levels are logical.
- Color is not the only way to communicate state.

### Phase 2 — Build the demo pages (days 2–3)
Tasks:
1. Create the forms demo with labeled and unlabeled examples.
2. Create the navigation demo with keyboard-friendly and intentionally flawed examples.
3. Create the content demo with heading and image-text alternatives.
4. Add a toggle or clear visual distinction between “Problem example” and “Improved example.”
5. Explain that sample failures are educational examples.
6. Keep all examples safe and local.

**Acceptance criteria:**
- A visitor can understand the issue without relying on color alone.
- The corrected examples use semantic HTML and proper accessible names.
- Keyboard navigation works in the corrected examples.
- The deliberately flawed example is clearly marked as a test fixture.

### Phase 3 — Implement real automated scans (days 4–5)
Recommended implementation:
1. Install Playwright and axe tooling.
2. Configure Playwright to launch the local application.
3. Navigate only to approved local demo routes.
4. Inject/run axe-core against the page.
5. Save actual results in a normalized JSON shape.
6. Capture `violations`, `passes`, `incomplete`, and `inapplicable` separately.
7. Preserve rule IDs, impact, descriptions, help URL, tags, target selectors, and failure summaries where available.
8. Handle timeouts and scan failures.
9. Include a scan timestamp and tool version when feasible.

**Acceptance criteria:**
- At least one known demo violation is detected by axe-core.
- At least one corrected example has fewer relevant violations than its flawed counterpart.
- Incomplete results are not silently presented as passes.
- The interface never fabricates findings or severity counts.
- Scanner failure produces a helpful error state.
- Scan execution is not triggered automatically on every render.

### Phase 4 — Results and finding details (days 6–7)
Tasks:
1. Build summary cards from real results.
2. Build a semantic HTML findings table.
3. Add filters for impact and rule category.
4. Add search by rule ID/title/selector.
5. Build a details view or expandable section for each finding.
6. Display WCAG tags with a clear caveat that tags are rule metadata, not a complete conformance verdict.
7. Add remediation guidance and authoritative links.
8. Add empty, loading, and error states.
9. Ensure the table and filters work with keyboard only.

**Acceptance criteria:**
- Filters can be operated without a mouse.
- The findings table has proper column headers.
- Status updates are announced appropriately when useful, without excessive screen-reader announcements.
- The details panel has a sensible focus order.
- HTML snippets are escaped and cannot execute.

### Phase 5 — Manual checklist (day 8)
Tasks:
1. Store checklist definitions in a reusable data file.
2. Add status controls and notes.
3. Group checks into clear categories.
4. Let users reset or update their checklist.
5. Provide a print-friendly layout.
6. Explain that a manual checklist complements automated scanning.

**Acceptance criteria:**
- Every checklist control has a programmatic label.
- Status can be selected by keyboard.
- Users can distinguish “not tested” from “pass.”
- No manual status is inferred from the automated scanner.

### Phase 6 — Export and polish (days 9–10)
Tasks:
1. Export JSON from the actual normalized scan data.
2. Optionally add CSV or printable HTML.
3. Include metadata and limitations in the export.
4. Add clear success/error feedback.
5. Add responsive states and polished empty/loading screens.
6. Check color contrast for AccessLab's own UI.
7. Review focus visibility, zoom/reflow, reduced motion, and text spacing.
8. Check browser console and fix warnings.

**Acceptance criteria:**
- Export contents match what the user sees.
- User-provided strings are escaped safely.
- Export includes timestamp and scope.
- The report does not claim certification or complete accessibility.
- The site works at 200% zoom and on narrow screens as far as practical.

### Phase 7 — Test, document, deploy (days 11–12)
Tasks:
1. Add Playwright tests for the main user journey.
2. Run axe-core against AccessLab's own key pages.
3. Manually test with keyboard only.
4. Test at 200% zoom and a narrow viewport.
5. Test at least one screen reader if available (VoiceOver on macOS is a useful option).
6. Add screenshots to README.
7. Document known limitations and future work.
8. Push the repository to GitHub.
9. Deploy the front end to Vercel.
10. Verify the deployed site and README links.

**Acceptance criteria:**
- The main demo scan journey completes successfully.
- There are no known critical blockers in the primary app journey.
- Any remaining automated findings are understood and documented, not hidden.
- Setup instructions work from a clean clone.
- Live demo and repository links are valid.

---

## 6. External URL scanning: only as a later phase

Do not begin here. First finish the local demo scanner.

If adding URL scanning later:
- Use a separate controlled scanner service.
- Permit only HTTP/HTTPS and block loopback, private, link-local, reserved, and cloud metadata IP ranges.
- Resolve DNS safely and re-check resolved addresses to reduce DNS rebinding risk.
- Block redirects to disallowed addresses and re-validate every redirect.
- Apply request timeouts, response-size limits, concurrency limits, and rate limits.
- Do not send cookies, user credentials, or internal network access.
- Avoid saving page contents unless absolutely needed; redact sensitive information.
- Explain that protected/authenticated pages may not be scannable.
- Do not use a public unrestricted “fetch any URL” API route.
- Consider a browser extension or user-run local CLI for scans where remote access is inappropriate.

External sites may change between scans and may contain dynamic or personalized content. Reports must identify the scan conditions and avoid overstating coverage.

---

## 7. Visual design direction

Aim for a calm, technical, recruiter-friendly product.

- Light neutral background with strong text contrast
- One restrained accent color
- Clear typography and generous spacing
- Summary cards with plain labels, not color-only severity indicators
- Severity text and icon/label together
- Clear table hierarchy and useful whitespace
- Visible focus outlines
- Consistent hover, focus, active, disabled, and error states
- No unnecessary animations; respect `prefers-reduced-motion`
- Responsive layout for desktop, tablet, and mobile
- Avoid dashboard clutter and decorative charts without a purpose

The UI should feel like a practical developer tool rather than a generic admin template.

---

## 8. Data model suggestion

Use a simple, transparent model. You can begin without a database.

### Scan record
```json
{
  "id": "scan-id",
  "pageName": "Forms demo",
  "pageUrl": "/demos/forms",
  "scannedAt": "ISO-8601 timestamp",
  "engine": "axe-core",
  "engineVersion": "actual version",
  "status": "completed",
  "violations": [],
  "passes": [],
  "incomplete": [],
  "inapplicable": []
}
```

### Finding record
Keep fields mapped from actual engine results:
```json
{
  "id": "rule-id",
  "impact": "actual engine impact",
  "description": "actual rule description",
  "help": "actual rule help text",
  "helpUrl": "official rule guidance URL",
  "tags": [],
  "nodes": [
    {
      "target": [],
      "html": "escaped text when displayed",
      "failureSummary": "actual engine summary when available"
    }
  ]
}
```

Do not fill these with invented scan data in the production results view. For layout prototyping, use clearly labeled fixture data and replace it with actual scan output before launch.

---

## 9. Testing plan

### Functional tests
- Landing page navigation works.
- Each demo page opens.
- Scan action triggers exactly one scan.
- Loading and failure states are shown.
- Findings match the scan result object.
- Impact filters and search work.
- Details expand and collapse.
- Manual checklist states update and persist for the current session or chosen storage method.
- JSON export parses and contains actual results.

### Accessibility tests for AccessLab
- Page has a meaningful title and language.
- Landmarks and headings are logical.
- All functionality works with keyboard only.
- Focus is visible and moves predictably.
- Buttons and links have meaningful accessible names.
- Forms have labels and understandable errors.
- Contrast meets the selected WCAG target where applicable.
- Layout remains usable at 200% zoom and narrow widths.
- Reduced-motion preference is respected.
- Run axe-core on the main app pages and review every finding.
- Manually test with VoiceOver or another screen reader when available.

### Important distinction
A clean axe-core report does not prove WCAG conformance. Some issues require human judgment, assistive-technology testing, and evaluation of the full user journey.

---

## 10. README outline

Use this structure for the final README:

1. Project name and one-sentence purpose
2. Live demo and repository links
3. Screenshots
4. Problem statement
5. Features
6. Architecture and tech stack
7. Local setup and commands
8. How the scanner works
9. Sample findings and remediation examples
10. Automated vs. manual testing
11. Accessibility decisions in AccessLab
12. Limitations and responsible use
13. Future improvements
14. Acknowledgements and official references

### Suggested references
- W3C Web Accessibility Initiative: https://www.w3.org/WAI/
- WCAG 2.2 Recommendation: https://www.w3.org/TR/WCAG22/
- WAI-ARIA Authoring Practices Guide: https://www.w3.org/WAI/ARIA/apg/
- axe-core: https://github.com/dequelabs/axe-core
- Playwright: https://playwright.dev/
- Next.js documentation: https://nextjs.org/docs

---

## 11. Portfolio presentation and interview preparation

Be ready to explain:
- Why you chose axe-core and what it can/cannot detect.
- How semantic HTML improves accessibility.
- The difference between a label, accessible name, and placeholder.
- How keyboard focus should work.
- Why `div` with a click handler is often worse than a native button.
- What WCAG is and how success criteria relate to findings.
- How you reproduced a finding and traced it to its root cause.
- Why automated passes are not equivalent to accessibility conformance.
- How you validated AccessLab itself.
- How you would make URL scanning secure.

Include one short demo: run a scan on the flawed form, open a finding, explain the impact, apply the fix, and scan again.

Do not claim professional accessibility certification or comprehensive WCAG compliance unless independently established.

---

## 12. Master prompt for Antigravity

Copy the following into Antigravity after saving this file as `ACCESSLAB_ROADMAP.md`.

> You are a senior frontend engineer and web accessibility mentor. Build the AccessLab project according to `ACCESSLAB_ROADMAP.md`.
>
> **Rules:**
> 1. Read the entire roadmap before coding.
> 2. Use JavaScript, not TypeScript.
> 3. Build in phases. First inspect the current repository and summarize the implementation plan; do not overwrite existing work without checking it.
> 4. Implement a working MVP, not merely static mockups. Scan results must come from real axe-core output for controlled local demo pages.
> 5. Do not implement unrestricted arbitrary-URL fetching. Limit MVP scans to local demo routes.
> 6. Make AccessLab itself accessible: semantic HTML, keyboard support, visible focus, labels, responsive layout, sufficient contrast, and clear error states.
> 7. Use real scan data. Never fabricate counts, violations, severity, WCAG tags, or scan success.
> 8. Treat `incomplete` axe results as requiring review, not as passes.
> 9. Escape HTML and user-controlled content when displaying or exporting it.
> 10. Keep components reusable, code readable, and dependencies minimal.
> 11. Add automated tests and document manual test steps.
> 12. Update the README with setup instructions, screenshots placeholders until actual screenshots exist, limitations, and live links only when available.
> 13. After each phase, run the relevant tests, inspect the result, fix issues, and summarize what changed and what remains.
> 14. If a requirement is ambiguous, choose the safest simple implementation and document the decision instead of silently inventing functionality.
>
> **Start now:** inspect the repository, check the available runtime and package manager, then implement Phase 1 and the basic project structure. Continue through the roadmap in small, verifiable phases. At the end, provide commands to run the app and tests, a list of implemented features, known limitations, and the next steps.

---

## 13. Definition of done

The project is ready to share when:
- The deployed app works.
- At least three local demo pages are available.
- A real axe-core scan detects at least one known issue in a flawed fixture.
- A corrected example demonstrates an improvement.
- Findings include explanation and remediation guidance.
- A manual testing checklist is available.
- JSON export works.
- AccessLab's primary user journey has been keyboard-tested and checked with axe-core.
- README includes reproducible setup instructions and honest limitations.
- You can confidently explain the project and demonstrate one complete issue-to-fix workflow.

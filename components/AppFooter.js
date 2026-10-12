import Link from 'next/link';

export default function AppFooter() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-disclaimer">
          <p>
            <strong>Important Notice:</strong> AccessLab is an educational developer-support auditing tool aligned with WCAG 2.1/2.2 and axe-core. Automated testing catches approximately 30–40% of accessibility barriers and cannot verify cognitive clarity, visual reading order, or screen reader audio nuances. Automated results must be complemented with manual testing. AccessLab never certifies websites as “100% accessible.”
          </p>
        </div>

        <nav aria-label="Footer Navigation">
          <ul className="footer-links" role="list">
            <li>
              <Link href="/methodology" className="footer-link">
                Methodology & POUR
              </Link>
            </li>
            <li>
              <Link href="/checklist" className="footer-link">
                Manual Checklist
              </Link>
            </li>
            <li>
              <Link href="/demos" className="footer-link">
                Interactive Demos
              </Link>
            </li>
            <li>
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                W3C WCAG Guidelines <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

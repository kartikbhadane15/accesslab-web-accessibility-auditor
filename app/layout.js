import './globals.css';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export const metadata = {
  title: 'AccessLab — Web Accessibility Auditor',
  description: 'A developer-support web accessibility auditing tool aligned with WCAG 2.1/2.2 and axe-core. Inspect issues, reproduce barriers, and understand remediation.',
  authors: [{ name: 'AccessLab Team' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppHeader />
        <main id="main-content" tabIndex="-1" className="main-content">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}

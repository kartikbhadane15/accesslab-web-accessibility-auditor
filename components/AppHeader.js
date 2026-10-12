'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/demos', label: 'Demo Library' },
    { href: '/checklist', label: 'Manual Checklist' },
    { href: '/methodology', label: 'Methodology' },
  ];

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        <Link href="/" className="brand-wrapper" aria-label="AccessLab Home — Web Accessibility Auditor">
          <span className="brand-badge" aria-hidden="true">A11Y</span>
          <span className="brand-name">AccessLab</span>
          <span className="brand-tagline">Web Accessibility Auditor</span>
        </Link>

        <nav className="site-nav" aria-label="Main Navigation">
          <ul className="nav-list" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

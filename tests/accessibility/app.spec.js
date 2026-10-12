import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('AccessLab Application Accessibility Audit', () => {
  const routesToTest = [
    { name: 'Landing Page', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Demo Library Directory', path: '/demos' },
    { name: 'Manual Testing Checklist', path: '/checklist' },
    { name: 'Methodology & Standards', path: '/methodology' },
  ];

  for (const route of routesToTest) {
    test(`Page "${route.name}" (${route.path}) passes automated axe-core audit`, async ({ page }) => {
      await page.goto(route.path);

      // Verify skip link exists and has proper target
      const skipLink = page.locator('.skip-link');
      await expect(skipLink).toBeAttached();
      await expect(skipLink).toHaveAttribute('href', '#main-content');

      // Verify main landmark has proper id and tabIndex
      const mainLandmark = page.locator('main#main-content');
      await expect(mainLandmark).toBeAttached();

      // Run axe-core with WCAG 2.1 / 2.2 Level AA tags
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      // Log violations if any are found
      if (accessibilityScanResults.violations.length > 0) {
        console.error(
          `Violations on ${route.path}:`,
          JSON.stringify(accessibilityScanResults.violations, null, 2)
        );
      }

      // Assert zero automated violations for AccessLab's own core interface
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test('Skip to content link is keyboard operable and moves focus', async ({ page }) => {
    await page.goto('/');

    // Press Tab from initial page load
    await page.keyboard.press('Tab');

    // Skip link should now be focused
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();

    // Trigger skip link
    await page.keyboard.press('Enter');

    // Focus moves to main#main-content
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });
});

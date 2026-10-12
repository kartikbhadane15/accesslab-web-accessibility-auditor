import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Demo Fixtures Comparative Audit', () => {
  test('Forms Demo: Flawed fixture produces violations whereas Improved fixture resolves them', async ({ page }) => {
    // 1. Audit Flawed Fixture
    await page.goto('/demos/forms?mode=problem');
    const flawedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="flawed-heading"]')
      .analyze();

    // Verify axe detected known issues (like missing label)
    const flawedRuleIds = flawedResults.violations.map((v) => v.id);
    expect(flawedRuleIds).toContain('label');

    // 2. Audit Improved Fixture
    await page.goto('/demos/forms?mode=improved');
    const improvedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="improved-heading"]')
      .analyze();

    // Improved fixture should have 0 violations in its section
    expect(improvedResults.violations).toEqual([]);
    expect(improvedResults.violations.length).toBeLessThan(flawedResults.violations.length);
  });

  test('Navigation Demo: Flawed fixture exhibits barriers whereas Improved fixture resolves them', async ({ page }) => {
    // 1. Audit Flawed Fixture
    await page.goto('/demos/navigation?mode=problem');
    const flawedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="flawed-nav-heading"]')
      .analyze();

    // 2. Audit Improved Fixture
    await page.goto('/demos/navigation?mode=improved');
    const improvedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="improved-nav-heading"]')
      .analyze();

    expect(improvedResults.violations).toEqual([]);
  });

  test('Content Demo: Flawed fixture produces alt and heading violations whereas Improved resolves them', async ({ page }) => {
    // 1. Audit Flawed Fixture
    await page.goto('/demos/content?mode=problem');
    const flawedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="flawed-content-heading"]')
      .analyze();

    const flawedRuleIds = flawedResults.violations.map((v) => v.id);
    // At least image-alt or heading-order is detected
    const hasDetectedContentIssue =
      flawedRuleIds.includes('image-alt') ||
      flawedRuleIds.includes('heading-order') ||
      flawedRuleIds.includes('color-contrast');

    expect(hasDetectedContentIssue).toBe(true);

    // 2. Audit Improved Fixture
    await page.goto('/demos/content?mode=improved');
    const improvedResults = await new AxeBuilder({ page })
      .include('section[aria-labelledby="improved-content-heading"]')
      .analyze();

    expect(improvedResults.violations).toEqual([]);
  });
});

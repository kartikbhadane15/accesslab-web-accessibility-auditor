import { test, expect } from '@playwright/test';

test.describe('Scanner Service & Security Restrictions', () => {
  test('Scanner API rejects arbitrary external URLs to prevent SSRF', async ({ request }) => {
    const maliciousTarget = 'https://example.com/sensitive-data';
    const response = await request.post('/api/scan', {
      data: { targetPath: maliciousTarget },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.error).toContain('Access denied');
  });

  test('Scanner API executes valid scan on authorized demo fixture', async ({ request }) => {
    const validTarget = '/demos/forms?mode=problem';
    const response = await request.post('/api/scan', {
      data: { targetPath: validTarget },
    });

    expect(response.ok()).toBe(true);
    const result = await response.json();

    expect(result.status).toBe('completed');
    expect(result.engine).toBe('axe-core');
    expect(result.summary).toBeDefined();
    expect(result.summary.totalViolations).toBeGreaterThan(0);
    expect(result.violations.length).toBeGreaterThan(0);

    // Rule IDs are real strings from axe-core
    const ruleIds = result.violations.map((v) => v.id);
    expect(ruleIds).toContain('label');
  });

  test('Dashboard end-to-end audit workflow', async ({ page }) => {
    await page.goto('/dashboard');

    // Trigger scan
    const scanButton = page.locator('button:has-text("Run axe-core Scan")');
    await expect(scanButton).toBeVisible();
    await scanButton.click();

    // Verify findings table is populated
    const findingsHeading = page.locator('h2:has-text("Detailed Finding Breakdown")');
    await expect(findingsHeading).toBeVisible({ timeout: 35000 });

    // Inspect fix drawer
    const inspectBtn = page.locator('button:has-text("Inspect Fix")').first();
    await expect(inspectBtn).toBeVisible();
    await inspectBtn.click();

    // Details drawer appears
    const detailsContainer = page.locator('h4:has-text("Form elements must have labels")').or(
      page.locator('h5:has-text("Why This Matters to Real Users")')
    );
    await expect(detailsContainer.first()).toBeVisible();
  });
});

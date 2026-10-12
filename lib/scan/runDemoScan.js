import { chromium } from 'playwright';
import axeCore from 'axe-core';
import { ALLOWED_SCAN_PATHS, DEMO_ROUTES } from './scanTypes.js';
import { normalizeAxeResults } from './normalizeResults.js';

/**
 * Executes a controlled axe-core scan using Playwright against an approved local demo fixture.
 * Strictly checks the route against the ALLOWED_SCAN_PATHS allowlist to guarantee zero SSRF vulnerabilities.
 */
export async function runDemoScan(targetPath, baseUrl = 'http://127.0.0.1:3000') {
  if (!targetPath) {
    throw new Error('Target route is required.');
  }

  // Strict allowlist validation
  const matchedRoute = DEMO_ROUTES.find((r) => r.path === targetPath);
  if (!matchedRoute) {
    throw new Error(
      `Access denied: Target route "${targetPath}" is not an authorized local demo fixture. Arbitrary URL scanning is restricted to prevent security risks.`
    );
  }

  const fullUrl = `${baseUrl.replace(/\/$/, '')}${targetPath}`;
  let browser = null;

  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });

    const page = await context.newPage();

    // Navigate with realistic timeout
    await page.goto(fullUrl, {
      waitUntil: 'networkidle',
      timeout: 25000,
    });

    // Prepare browser global environment for UMD module evaluation
    await page.evaluate(() => {
      window.module = window.module || { exports: {} };
      window.exports = window.module.exports;
    });

    // Inject axe-core directly via script tag
    await page.addScriptTag({ content: axeCore.source });

    // Run axe in browser context with standard WCAG and best practice tags
    const axeResults = await page.evaluate(async () => {
      return await window.axe.run(document, {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'],
        },
      });
    });

    const normalized = normalizeAxeResults(axeResults, {
      pageUrl: targetPath,
      pageName: matchedRoute.name,
      scanId: `scan-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    });

    return normalized;
  } catch (err) {
    console.error(`[AccessLab Scanner] Error auditing ${targetPath}:`, err);
    throw new Error(`Failed to complete accessibility scan for ${targetPath}: ${err.message}`);
  } finally {
    if (browser) {
      await browser.close().catch(() => {});
    }
  }
}

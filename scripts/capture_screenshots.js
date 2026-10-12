import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function capture() {
  const outputDir = path.resolve('./public/screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2, // High resolution screenshot
  });

  const page = await context.newPage();

  // 1. Landing Page
  console.log('Capturing Landing Page...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'accesslab_home.png'), fullPage: false });

  // 2. Dashboard with live scan executed
  console.log('Capturing Dashboard with live scan results...');
  await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle' });
  // Click scan button and wait for findings
  const scanBtn = page.locator('button:has-text("Run axe-core Scan")');
  if (await scanBtn.isVisible()) {
    await scanBtn.click();
    await page.waitForSelector('h2:has-text("Detailed Finding Breakdown")', { timeout: 30000 });
    // Expand the first finding
    const inspectBtn = page.locator('button:has-text("Inspect Fix")').first();
    if (await inspectBtn.isVisible()) {
      await inspectBtn.click();
    }
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: path.join(outputDir, 'accesslab_dashboard.png'), fullPage: false });

  // 3. Demo Library / Forms Demo
  console.log('Capturing Demo Library...');
  await page.goto('http://localhost:3000/demos/forms', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'accesslab_demos.png'), fullPage: false });

  // 4. Manual Checklist
  console.log('Capturing Manual Checklist...');
  await page.goto('http://localhost:3000/checklist', { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'accesslab_checklist.png'), fullPage: false });

  console.log('Screenshots captured successfully!');
  await browser.close();
}

capture().catch((err) => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});

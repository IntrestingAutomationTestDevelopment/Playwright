const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: false }); // Launch in non-headless mode
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();

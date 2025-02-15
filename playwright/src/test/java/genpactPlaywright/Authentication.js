const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('#login');
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
})();
//npx playwright test --ui
//await page.pause();


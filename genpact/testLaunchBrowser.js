const {chromium} = require('playwright')
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const context = await browser.newContext();
  await page.goto('https:/chatgpt.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'pass');
  await page.click('button[type="submit"]');
  await context.storageState({ path: 'auth.json' });
  await browser.close();
  })();
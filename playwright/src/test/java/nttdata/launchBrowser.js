const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://chatgpt.com');
  console.log(await page.title());
  await browser.close();
})();

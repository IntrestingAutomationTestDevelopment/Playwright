const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to a page
  await page.goto('https://example.com');
  
  // Take a full-page screenshot
  await page.screenshot({ path: 'fullpage.png', fullPage: true });
  
  // Close the browser
  await browser.close();
})();

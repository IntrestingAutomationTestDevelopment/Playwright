const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); // `headless: false` lets you see the browser window
  const page = await browser.newPage();
  
  // Navigate to a URL
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'example.png' });

  // Close the browser
  await browser.close();
})();

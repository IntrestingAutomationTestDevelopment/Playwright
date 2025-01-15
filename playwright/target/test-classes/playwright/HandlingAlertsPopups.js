const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to a page with a popup (e.g., an alert)
  await page.goto('https://example.com/alert-page');
  
  // Wait for the alert to appear and accept it
  page.on('dialog', dialog => {
    console.log(dialog.message());  // Log the message of the alert
    dialog.accept();  // Accept the alert
  });

  // Trigger the alert
  await page.click('#trigger-alert');  // Assume there's a button with id `trigger-alert`

  // Close the browser
  await browser.close();
})();

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.chatgpt.com');
 
  //waitForTimeout: Pauses the script for a specified amount of time.
  //waitForResponse: Waits for a specific network request to complete.
  //waitForLoadState: Waits for the page to reach a specific load state like load, domcontentloaded
   // wait for element locator
    await page.waitForSelector('button#submit', { state: 'visible' });

  // Capture a screenshot
  await page.screenshot({ path: 'example.png' });
	
  await browser.close();
})();

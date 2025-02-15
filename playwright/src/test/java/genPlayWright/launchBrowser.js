const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://chatgpt.com');
	await page.screenshot({ path: 'screenshot.png' });
	await page.waitForSelector('#dynamic-element', { timeout: 5000 });
    await browser.close();
})();

const { chromium } = require('playwright');

async function launchBrowser() {
	const browser = await chromium.launch({ headless: false });
	const context = await browser.newContext();
	const page = await context.newPage();
	await page.goto('https://example.com');
	await browser.close();
}

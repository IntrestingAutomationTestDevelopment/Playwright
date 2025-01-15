//import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');
(async () => {
	//const browser = await chromium.launch({ headless: false });
	test('Test Case 1: Google Homepage', async ({ page }) => {
		await page.goto('https://google.com');
		await expect(page).toHaveTitle(/Google/);
	});

	test('Test Case 2: Playwright Homepage', async ({ page }) => {
		await page.goto('https://playwright.dev');
		await expect(page).toHaveTitle(/Playwright/);
	});
})();
import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('test 2', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveTitle('Playwright');
});

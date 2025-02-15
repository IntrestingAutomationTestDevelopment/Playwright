// test.spec.js
const { test, expect } = require('@playwright/test');
const { login } = require('./helpers'); // Import the reusable method

test('User should be able to log in', async ({ page }) => {
    await login(page, 'testUser', 'securePassword');
    expect(await page.locator('#welcomeMessage').textContent()).toContain('Welcome');
});

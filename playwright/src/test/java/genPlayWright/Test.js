import { chromium } from 'playwright';
import LoginPage from './LoginPage.js';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await page.goto('https://example.com/login');
  await loginPage.login('testUser', 'testPass');

  await browser.close();
})();

const { chromium } = require('playwright');

describe('Playwright with Jest', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should open a page and check title', async () => {
    await page.goto('https://chatgpt.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
});

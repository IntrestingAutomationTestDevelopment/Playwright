const context1 = await browser.newContext();
const page1 = await context1.newPage();
await page1.goto('https://example.com');

const context2 = await browser.newContext();
const page2 = await context2.newPage();
await page2.goto('https://another-example.com');
//Element vs Locator
await page.locator('text=Login');
await page.locator('#username');
await page.locator('.password');
await page.locator('//button[contains(text(), "Submit")]'); // XPath
//Select class vs SelectOption
await page.selectOption('select#dropdown', 'optionValue');
//handle frame
const frame = page.frameLocator('iframe#frameId');
await frame.locator('button#submit').click();
//fileUploads
await page.setInputFiles('input[type="file"]', 'path/to/file.png');
//screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });
//"workers": 4
//npx playwright test --reporter=html
//mock api requests
async function mockapiTesting() {
await page.route('**/api/user', async (route) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ name: 'John Doe', age: 30 })
  });
  }
 
}
  
  

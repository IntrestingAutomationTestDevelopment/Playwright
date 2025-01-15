const context = await browser.newContext({ storageState: 'state.json' });
const page = await context.newPage();
await page.goto('https://chatgpt.com');
await page.screenshot({ path: 'screenshot.png' });
//await page.setInputFiles('input[type="file"]', 'path/to/file.txt');
// Example
test('should work', async ({ page }) => {
  await page.goto('https://www.google.com');
});

await page.route('**/api/*', route => {
  if (route.request().url().includes('block-this')) {
    route.abort();
  } else {
    route.continue();
  }
});
module.exports = {
  workers: 4, // Number of parallel workers
};
//const browser = await chromium.launch({ headless: false });



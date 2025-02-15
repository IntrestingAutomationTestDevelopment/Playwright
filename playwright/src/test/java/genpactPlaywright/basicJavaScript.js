//Authentication Via Cookies
const cookies = [{
  name: 'sessionId',
  value: 'chatgpt',
  domain: 'chatgpt.com',
}];

await context.addCookies(cookies);
await page.goto('https://www.chatgpt.com/login');
await page.fill('input[name="username"]', 'user');
await page.fill('input[name="password"]', 'password');
await page.click('button[type="submit"]');
const context = await browser.newContext(); // Create a new isolated context
const page1 = await context.newPage(); // Create a page in the first context
const page2 = await context.newPage(); // Create another page in the same context

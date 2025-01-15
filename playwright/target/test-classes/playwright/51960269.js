const { chromium } = require('playwright');

async function performLogin(page, username, password) {
  // Go to the login page
  await page.goto('https://chatgpt.com/login');

  // Fill the login form fields
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);

  // Click the submit button to log in
  await page.click('button[type="submit"]');

  // Wait for the navigation to complete after login
  await page.waitForNavigation();

  // Return the title of the page after login
  return await page.title();
}

(async () => {
  const browser = await chromium.launch(); // Launch browser
  const page = await browser.newPage();    // Create a new page

  // Call the performLogin function
  const pageTitle = await performLogin(page, 'testUser', 'testPassword');

  // Log the title of the page after logging in
  console.log('Page Title after Login:', pageTitle);

  // Close the browser
  await browser.close();
})();

// helpers.js (Reusable function file)
async function login(page, username, password) {
    await page.goto('https://example.com/login');
    await page.fill('#username', username);
    await page.fill('#password', password);
    await page.click('#loginButton');
    await page.waitForNavigation(); // Wait for the page to load
}

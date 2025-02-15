const {chromium} = require('playwright');

(async ()=> {

const browser = await chromium.launch();
const page= await browser.newPage();

//Navigate to the page
await page.goto('https://chatgpt.com');

//waiting for an element to appear
await page.waitForSelector('#loginButton');

//clicking the element
await page.click('#loginButton');

await browser.close();

})();
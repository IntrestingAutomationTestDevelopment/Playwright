const { chromium } = require('Playwright');

(async () =>{

	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();

    // Wait for the alert to appear and accept it
     
	await page.goto("https://www.chatgpt.com");
	page.on('dialog', dialog => {
    console.log(dialog.message());  // Log the message of the alert
    dialog.accept();  // Accept the alert
  	});
	

})();

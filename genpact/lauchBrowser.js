const { chromium } = require('playwright');
(async () => {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();
	page.goto('https://www.chatgpt.com');
	await page.click("//button[@class='btn relative btn-primary']");
	await page.fill('//input[@id="email-input"]', "sairaghavaabhilash40@gmail.com");
	await page.click('//div//button[@class="continue-btn "]');
	await page.fill('//input[@id="password"]', "301093Ksra$");
	await page.isVisible('div[@id="content"]', { timeout: 5000 });
	console.log("OL email received 1 by tomorrow");
	console.log("OL email received 2 by tomorrow");
	await expect(page.locator('//button[@name="action"]')).toHaveCount(0);
	console.log("Interview invite a received");
	//await page.click('//button[@name="action"]');
	//await page.isVisible("text='Delete'")
	await page.isVisible('//span[@id="error-element-password"]');
	//await page.isVisible('//button[@data-provider="google"]');
	await page.click('//button[@data-provider="google"]');
	await page.isVisible('//span[text()="Next"]', { timeout: 5000 });
	await page.click('//span[text()="Next"]');
	

	try {
		await page.waitForSelector("//div[text()='Sign in with Google']", { timeout: 5000 })
		// ...`enter code here`
	} catch (error) {
		//`enter code here`
		console.log("The element didn't appear.")
	}
	await page.fill('//input[@id="identifierId"]',"sairaghavaabhilash40@gmail.com");
	const isDisplayed = await element.isDisplayed();
	if (isDisplayed) {
	            console.log("The element is displayed.");
	        } else {
	            console.log("The element exists but is not displayed.");
	        }
			await page.fill('//div//input[@name="Passwd"]','301093Ksra$');
				await expect(page.locator('//div//input[@name="Passwd"]')).toBeVisible()
	
})();

const { remote } = require('webdriverio');

async function validateElementDisplayed() {
    const browser = await remote({
        logLevel: 'info',
        path: '/',
        capabilities: {
            browserName: 'chrome'
        }
    });

    try {
        // Navigate to the website
        await browser.url('https://example.com');

        // Locate the element
        const element = await browser.$('#element-id');  // Replace with your locator strategy and value

        // Check if the element is displayed
        const isDisplayed = await element.isDisplayed();
        
        if (isDisplayed) {
            console.log("The element is displayed.");
        } else {
            console.log("The element exists but is not displayed.");
        }
    } catch (error) {
        console.log("The element is not found.");
    } finally {
        // Close the browser
        await browser.deleteSession();
    }
}

validateElementDisplayed();

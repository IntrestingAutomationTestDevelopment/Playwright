
await page.click('button#submit');
await page.fill('input[name="username"]', 'myuser');
await page.type('input[name="password"]', 'mypassword');
/**
 *  CSS selectors: page.click('button.submit')
 *Text selectors: page.click('button', { text: 'Submit' })
 *XPath: page.click('xpath=//button[@id="submit"]')
 *Role selectors: page.click('role=button[name="submit"]')
 */

 page.on('dialog', dialog => {
   console.log(dialog.message()); // Logs the alert message
   dialog.accept(); // Accepts the alert
 });
 await page.click('button#alert-button');
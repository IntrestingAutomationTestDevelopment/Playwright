const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to a page with a file input
  await page.goto('https:www.naukri.com');
  
  await page.type('//a[@title="Jobseeker Login"]','abhilashkakarlasairaghava@gmail.com', { delay: 50 }); 
  await page.type('//input[@placeholder="Enter your password"]','301093Ksra$', { delay: 50 });
  await page.click('//button[@type="submit"]');
  
  // Select the file input and upload a file
 // const fileInput = await page.$('input[type="file"]');
  //input[@placeholder='Enter your active Email ID / Username']
 // type="text"
  await fileInput.setInputFiles('//Users//hp//Desktop//Resume');
  // Wait for upload completion (adjust this as needed)
  await page.waitForSelector('.upload-success');
  // Close the browser
  await browser.close();
})();
//input[@placeholder='Enter your password']

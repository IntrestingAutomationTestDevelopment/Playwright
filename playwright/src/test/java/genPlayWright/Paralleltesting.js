const { firefox } = require('playwright');
const { chromium } = require('playwright');
const { WebKit } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();
  })();
  ////input[@placeholder='Enter your password']
  
  (async () => {
    const browser = await chrome.launch({ headless: false });
    const page = await browser.newPage();
    })();
	
	(async () => {
	  const browser = await WebKit.launch({ headless: false });
	  const page = await browser.newPage();
	  })();
	  
	  module.exports = {
	      workers: 4, // Run 4 tests in parallel
	  };


const {test,expect,chromium} = require('playwright/test');

test('hey1', async () => 
    {
  // Launch a browser instance
  const browser = await chromium.launch(); // Set headless to false to see the browser

  // Create a new browser context
  const context = await browser.newContext();

  // Create a new page in this browser context
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  // Navigate to a website
  await page1.goto('https://example.com');
  await page2.goto('https://google.com');
  
})
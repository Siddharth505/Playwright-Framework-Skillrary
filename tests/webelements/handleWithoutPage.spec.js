const { default: test } = require('node:test');
const { chromium } = require('playwright');  // or 'firefox' or 'webkit'

 test('Title1',async () => 
    {
  // Launch a browser instance
  const browser = await chromium.launch({ headless: false }); // Set to true for headless mode

  // Create a new browser context
  const context = await browser.newContext();

  // Open a new page
  const page = await context.newPage();

  // Navigate to a website
  await page.goto('https://google.com');

  // Perform actions
  const title = await page.title();
  console.log(`Page title is: ${title}`);

  // Close the page, context, and browser
  await page.close();
});
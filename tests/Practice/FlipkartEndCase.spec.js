// Open Flipkart
// Search Iphone16
//Add Item to Cart 
// Open Cart and Remove The Item
const {test,expect}=require('@playwright/test')
test('Handle Flipkart Case',async({browser})=>
{
  const context= await browser.newContext();
  const page1=  await context.newPage();
  await page1.goto("https://www.flipkart.com/");
  page1.on('dialog',dialog=>dialog.dismiss());
  await page1.locator("//input[@class='Pke_EE']").fill("Iphone16");
  await page1.locator("//button[@class='_2iLD__']").click();
  const pagePromise=context.waitForEvent('page');
  await page1.locator("//div[@data-id='MOBH4DQFZCJJXUFG']//div[text()='Apple iPhone 16 (Black, 256 GB)']").click();
  const pagePromise2= await pagePromise;
  await page1.locator("//button[@class='QqFHMw vslbG+ In9uk2']").click();
  

});

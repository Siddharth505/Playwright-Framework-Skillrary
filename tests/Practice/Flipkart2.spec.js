const { test, expect } =require('@playwright/test')

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('iphone16');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  
  const page1 = page.waitForEvent('popup');
  
  await page.locator("//div[@data-id='MOBH4DQFZCJJXUFG']//div[text()='Apple iPhone 16 (Black, 256 GB)']").click();
  
  const page2 = await page1;
  await page2.locator("//li[@class='col col-6-12 ']").click();
  await page.waitForTimeout(10000);
});
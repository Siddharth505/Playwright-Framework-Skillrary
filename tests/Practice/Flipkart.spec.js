const { test, expect }=require ('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  
  await page.getByPlaceholder('Search for Products, Brands').click();
  await page.getByPlaceholder('Search for Products, Brands').fill('iphone16');
  await page.getByPlaceholder('Search for Products, Brands').press('Enter');
  
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 16 (Ultramarine, 128 GB) Add to Compare Apple iPhone 16 (' }).click();
  const page1 = await page1Promise;
  
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByText('Remove').click();
  await page1.getByText('Remove').nth(2).click();
});
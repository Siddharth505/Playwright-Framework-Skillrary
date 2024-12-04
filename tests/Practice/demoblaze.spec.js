const { test, expect }=require ('@playwright/test');

test('test', async ({ page }) => {
  await page.goto("https://www.demoblaze.com/#");
  await page.viewportSize({width:1080,height:1080})
  await page.locator("//a[text()='Laptops']").click();
  await page.locator("//a[text()='MacBook air']/ancestor::div[@class='card h-100']").click();
  await page.locator("//a[@onclick='addToCart(11)']").click();
  await page.locator("#cartur").click();
  await page.locator("//a[text()='Delete']/ancestor::tr[@class='success']").click();
  await page.waitForTimeout(10000);
  
  




})
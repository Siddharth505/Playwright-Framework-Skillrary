
const{test,expect} = require('@playwright/test')
   test('Amazon End to End Case',async({page})=>
{
   await page.goto("https://www.amazon.in/");
   await page.locator('#twotabsearchtextbox').fill("Apple iPhone 16 (128 GB) - Teal");
   await page.locator('#twotabsearchtextbox').press('Enter');
  await page.waitForTimeout(30000);
   // await expect.soft(page).toHaveTitle("Amazon.in : Iphone16");
   //await page.locator("//span[text()='Apple iPhone 16 (128 GB) - Ultramarine']/ancestor::div[@class='puisg-row']//button[text()='Add to cart']").click();
   //await page.locator("//span[text()='Apple iPhone 16 (256 GB) - Teal']/ancestor::div[@class='puisg-row']//button[@id='a-autoid-1-announce']").click();
   await page.locator('#a-autoid-1-announce').click();
   await page.getByRole('link', { name: 'Go to Cart' }).click();
   const quantity= await page.getByText('Qty:1');  
   console.log(quantity.textContent);
   await page.pause();
})

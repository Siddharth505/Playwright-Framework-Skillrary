const{test,expect}=require('@playwright/test')
test('Case1',async({page})=>
{
await page.goto("https://www.amazon.com/");
await page.getByPlaceholder("Search Amazon").fill("Sony Headphones");
await page.getByPlaceholder("Search Amazon").press('Enter');
await page.locator("a-autoid-1-announce").click();
await page.getByRole('link', {name:'         Go to Cart     '})
await page.getByLabel("Delete Sony WH-1000XM5 The Best Wireless").click();

})

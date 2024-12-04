const{test,expect}=require('@playwright/test')
test('Case1',async({page})=>
{
await page.goto("https://www.amazon.com/");
await page.getByPlaceholder("Search Amazon").fill("Sony Headphones");
await page.getByPlaceholder("Search Amazon").press('Enter');
await page.getByRole('link',{name:'WH-1000XM5 The Best Wireless Noise Canceling Headphones'}).first().click();
await page.getByTitle('Add to Shopping Cart').click();
await page.getByRole('link',{name:'Go to Cart'}).click();
await page.getByLabel('Delete Sony WH-1000XM5 The Best Wireless').click();
await page.evaluate(() => window.scrollTo(0, 1000));
    //await page.mouse.wheel(0,900);

})

test.skip('case2',async({page})=>
{
    await page.goto("https://www.amazon.com/");
    await page.locator("#nav-hamburger-menu").click();
    await page.getByRole('link',{name:'Amazon Music'}).click();
    await page.getByRole('link',{name:'Free Streaming Music'}).click();
    //await page.evaluate(() => window.scrollTo(0, 1000));
    //await page.mouse.wheel(0,900);

     
})

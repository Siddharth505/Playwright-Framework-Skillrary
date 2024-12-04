const {test,expect}= require('playwright/test')
test('Test End To End Case1',async({page})=>
{
  
    await page.goto("https://www.amazon.com/");
    await page.locator("#twotabsearchtextbox").fill("Iphone15");
    await page.locator("//input[@class='nav-input nav-progressive-attribute']").nth(1).click();
    await page.waitForSelector("//div[@data-cy='title-recipe']",{ timeout: 10000 });
    const ele= await page.$$("//div[@data-cy='title-recipe']");
    console.log( await ele.length);
    for(const ele2 of ele)
    {
        console.log(await ele2.textContent());
    }
    await page.waitForTimeout(4000);
    await ele[2].click();
    //await page.waitForSelector("//div[@class='a-popover-inner']//li",{timeout:10000});
    //await page.locator("//div[@class='a-popover-inner']//li").nth(1).click();

    //await expect(page).toHaveTitle("Amazon.com: Apple iPhone 15 Pro, 256GB, White Titanium - Unlocked (Renewed) : Cell Phones & Accessories");
})
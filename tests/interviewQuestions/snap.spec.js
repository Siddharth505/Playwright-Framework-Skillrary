
const {test,expect,chromium}=require('@playwright/test')
test('HandleCases',async()=>
{
    const browser=await chromium.launch();
    const context = await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://snapdeal.com/");
    await page.locator("#inputValEnter").fill("Iphone");
    await page.locator("//span[@class='searchTextSpan']").click();
    await page.waitForSelector("//p[@class='product-title']",{timeout:10000});
    const ele= await page.$$("//p[@class='product-title']");
    console.log("Number of Elements are"+ele);

    for(ele2 of ele)
    {
    console.log(ele2.textContent());
    }
})
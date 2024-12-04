const {test,expect,chromium} = require('@playwright/test')

test('windows',async ()=>
{
    const browser= await chromium.launch();
    const context =await browser.newContext();

    const page1= await context.newPage();
    const page2= await context.newPage();

    const allpage=context.pages();
    console.log(allpage.length)
})

test('HandleWindows',async({page})=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const eventwait=context.waitForEvent('page');
    await page.locator('#opentab').click();
    const page2=await eventwait; 
    await page.pause();


});
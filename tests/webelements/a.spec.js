const {test,expect,chromium} = require('@playwright/test')

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
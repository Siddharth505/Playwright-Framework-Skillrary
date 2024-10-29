const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleAlertPopups',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("#alertbtn").click();
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    await page.locator("//a[text()='Top']").click();
    //await page.pause()




});
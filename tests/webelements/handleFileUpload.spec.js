const {test,expect} = require('@playwright/test')

test('UploadFile',async({page})=>
{
await page.goto("https://practice.expandtesting.com/upload");
await page.locator('#fileInput').setInputFiles("C:/Users/Siddharth/Desktop/1.docx")
await page.locator('#fileSubmit').click();

await page.waitForTimeout(5000);
await page.pause();

});
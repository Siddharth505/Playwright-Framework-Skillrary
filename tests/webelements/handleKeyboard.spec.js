const {test,expect} = require('@playwright/test')

test('HandleKeyboard',async({page})=>
{
await page.goto("https://www.demoblaze.com/");
await page.locator('#login2').click();
await page.locator('#loginusername').fill("1111")

await page.keyboard.press('Control+A');
await page.keyboard.press('Control+X');
await page.keyboard.down('Tab');
await page.keyboard.press('Control+V');
await page.keyboard.press('A');
await page.keyboard.press('B');
await page.locator('#kasjflk').press('ENTER');
//await page.keyboard.up('Tab')
//await page.keyboard.press('Control+V')

await page.waitForTimeout(5000);
//await page.pause();

});
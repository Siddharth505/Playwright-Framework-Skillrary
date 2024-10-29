const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleDropdown',async({page})=>
{
await page.goto('https://www.google.com/')
await page.locator("//textarea[@class='gLFyf']").fill('Delhi');
await page.waitForSelector("//div[@jsname='erkvQe']//li")

const options=await page.$$("//div[@jsname='erkvQe']//li")
for(const option of options)
{
    const textvalue= await option.textContent()
     console.log(textvalue)
     
}
await page.pause();


});
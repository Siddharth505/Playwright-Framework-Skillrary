const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleRadio',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

await page.locator("//input[@value='radio2']").click()

await page.pause()

});
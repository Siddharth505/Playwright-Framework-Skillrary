const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleCheckbox',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

await page.locator('#checkBoxOption1').click()

await page.pause()


    

});
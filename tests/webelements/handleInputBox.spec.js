const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleInputBox',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

await page.getByPlaceholder('Enter Your Name').fill('Test App')

await page.pause()


    

});
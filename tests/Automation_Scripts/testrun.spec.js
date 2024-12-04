const {test,expect} = require('@playwright/test')

test('Title',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
await page.locator('#class.btn btn-primary').click();

//await page.locator('checkBoxOption1').click();

});


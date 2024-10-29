const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleDropdown',async({page})=>
{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

await page.locator('#dropdown-class-example').selectOption('Option2')

//Print All Elements
const opt1= await page.$$('#dropdown-class-example')
for(const opt2 of opt1)
{
console.log(await opt2.textContent())
}
await page.pause()
});
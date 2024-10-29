const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('HandleDropdown',async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.selectOption('#colors',['Blue','Red','Yellow'])
await page.pause()
});
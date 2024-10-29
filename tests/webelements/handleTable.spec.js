const {test,expect} = require('@playwright/test')

test('HandleTable',async({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const table= await page.locator('product')
    
    await page.pause();
    const column= await table.locator('tbody tr th')
    console.log('Number of Columns:',await column.count)
    });
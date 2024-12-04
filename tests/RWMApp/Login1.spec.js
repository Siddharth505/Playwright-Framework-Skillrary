const {test,expect} = require('@playwright/test');
const data1=JSON.parse(JSON.stringify(require("D:/Playwright Code/tests/RWMApp/Datafile.json")))
test('Login',async({page})=>
{
await page.goto('/');

await page.locator('#UserName').fill(data1.username);
//await page.locator('#UserName').fill(data1.subject[2]);
await page.locator('#Password').fill(data1.password);
await page.locator("//button[@type='submit']").click();

});
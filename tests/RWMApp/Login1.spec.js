const {test,expect} = require('@playwright/test');

test('Login',async({page})=>
{
await page.goto('/');

await page.locator('#UserName').fill('fsts1');
await page.locator('#Password').fill('96385');
await page.locator("//button[@type='submit']").click();

});
const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('GetLinks',async({page})=>
{
await page.goto('https://www.demoblaze.com/')
const links= await page.$$('a');
const samsung=await page.locator("//a[text()='Samsung galaxy s6']/ancestor::div[@class='card h-100']");
//await expect(samsung).toHaveText("Samsung  processor");
await expect(samsung).toBeDisabled();
console.log("Number of Elements are" + await links.length);
for(const link of links)
    {
    const linktext= await link.textContent();
    console.log(linktext);
    }
    

});

const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('GetLinks',async({page})=>
{
await page.goto('https://www.demoblaze.com/')
const value="Sony vaio i7";
await page.waitForLoadState('networkidle');
const ele=await page.$$("//a[@class='hrefch']");

// 1 To Get the Count of Elements.
console.log(await ele.length);

// 2 To Click on Specific Element.
await ele[3].click();
await page.waitForTimeout(4000);

for (const ele2 of ele) {
    const text = await ele2.evaluate(el => el.textContent.trim()); // Get the text content
    if (ele2.length >= 3) {
        await ele[2].click(); // Click on the 3rd element (index 2)
        console.log("Clicked on the 3rd element.");
    } else {
        console.log("Less than 3 elements found.");
    }
    }
}
    
    

);
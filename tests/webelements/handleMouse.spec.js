const {test,expect} = require('@playwright/test')

test('HandleMouse',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

//MouseHover
const mhover=await page.locator('#mousehover')
await mhover.hover();
await page.locator("//a[text()='Top']").click();
await page.waitForTimeout(5000);
//Right Click
const rightclick=await page.locator("//button[text()='Home']")
await rightclick.click({button: 'right'});
//DoubleClick
const doubleclick=await page.locator("//button[text()='Home']")
await doubleclick.dblclick();


await page.pause();

});
const {test,expect} = require('@playwright/test')

test('HandleFrames',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
const switchToframe= page.frameLocator('#courses-iframes')
await switchToframe.locator("//a[text='Login']").click
await expect(page).toHaveTitle('Expected Title');

//await page.getByText('Courses').click();
//await page.pause();


});
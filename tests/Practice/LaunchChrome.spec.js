const {test,expect,chromium} = require('@playwright/test')

test('Case1',async()=>
{
    const browser=await chromium.launch();
    const context= await browser.newContext();
    const page = await context.newPage();

    await page.setDefaultTimeout(10000);
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.reload();

    await expect(page).toHaveTitle("Google");
    const ele=await page.locator("");
    await expect(ele).toBeVisible();
    await expect(ele).toHaveText("Motherboard");
await page.screenshot({ path: 'full_page_screenshot.png', fullPage: true });
})
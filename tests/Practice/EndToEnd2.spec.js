const {test,expect, chromium}=require('@playwright/test')
test('EndToENdCase',async({browser})=>
{
    //const browser= await chromium.launch();
    const context= await browser.newContext();
    const page=   await context.newPage();
    await page.goto("https://www.google.com/");

    const lang1= await page.$$("//*[@id='SIvCob']//a");
     console.log(await lang1.length);
    for(const lang2 of lang1)
    {
        //const lang3=lang2.textContent();
        console.log("Languages are " +await lang2.textContent());
    }
    
});
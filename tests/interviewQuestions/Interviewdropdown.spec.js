const {test,expect}=require('@playwright/test')
test('HandleDropdown',async({page})=>
{
    await page.goto("https://www.amazon.com/");
    //await page.waitForLoadState('networkidle');
    await page.locator("//select[@id='searchDropdownBox']").selectOption({index:3});
    const ele=await page.$$("//select//option");
    console.log("THe size of elements are"+ await ele.length);
   
    for(const ele2 of ele)
        {
            console.log(await ele2.textContent());
            
            
        }    

})
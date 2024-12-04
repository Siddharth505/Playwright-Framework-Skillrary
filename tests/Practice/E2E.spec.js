const{test,expect}=require('@playwright/test');
const { count } = require('console');
const { link } = require('fs');
test('Title1',async({page})=>
{
await page.goto("https://www.amazon.com/");
await page.getByPlaceholder("Search Amazon").fill("Sony Headphones");
await page.getByPlaceholder("Search Amazon").press('Enter');
await page.waitForTimeout(10000);
const links=await page.locator("//*[@class= 'a-size-medium a-color-base a-text-normal']");
 //console.log(await links.first().textContent()); 
 //console.log(await links.allTextContents());
 console.log(links.count());

 for(let i=1;i<links.count;i++)
 {
    await links.nth(2).click();
 }
 //console.log("Number of Devices are "+ links.length);
//console.log(`Number of elements: ${links.length}`);

/*for( const links2 of links)
{
    //console.log( await links2.textContent() +"  ");
    //console.log(await links2.innerText());
    if(links>4)
    {
        links[3].click();
    }
}*/
//span[contains(text(),'Sony')]/ancestor::div[@class='a-row']
})
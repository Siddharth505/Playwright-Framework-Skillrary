const {test,expect} = require('@playwright/test');
const { link } = require('fs');

test('GetTitleOfProducts',async({page})=>
{
await page.goto('https://www.demoblaze.com/')

//page.waitForSelector("//div[@id='tbodyid']//h4//a");

const links= await page.$$("//div[@id='tbodyid']//h4//a");
for(const link of links)
    {
    const linktext= await link.textContent();
    console.log(linktext);
    }
    

});


//div[@id='tbodyid']//h4//a
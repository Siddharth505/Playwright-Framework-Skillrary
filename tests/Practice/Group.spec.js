
const{test,expect} = require('@playwright/test')
   test('TC1@smoke',async({page})=>
   {
    console.log("Method1");
    await page.pause();
 
   })
   test('TC2@Smoke',async({page})=>
    {
  
        console.log("Method2");
    })
    test('TC3@Sanity',async({page})=>
        {
      
    console.log("Method3");
        })
    test('TC4@Sanity',async({page})=>
            {
          
    console.log("Method4");
            })
const {test,expect} = require('@playwright/test');

test.skip('HandleDropdown',async({page})=>
    {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    
    const opt1= await page.$$('//a');
    console.log(`Number of <div> elements: ${opt1.length}`);
    for(const opt2 of opt1)
    { 
        const opt3= await opt2.textContent();
        console.log( opt3);
    }
    });
    test.skip('dropdown case',async ({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const var1= await page.$$('#dropdown-class-example');
        for( const var2 of var1)
        {
            const var3= await var2.textContent();
            console.log("Values of Dropdown" + var3);
        }
        
    })
    test.skip('Autosuggestion case',async ({page})=>
        {
            await page.goto('https://www.google.com/');
            await page.locator('#APjFqb').fill('Selenium');
            const suggestion= await page.$$('#c7mM1c');
            for(const sug of suggestion)
            {
                const sug3= await sug.textContent(); 
                console.log(sug3)
            }  
        })

        test.skip('Handle Alert',async ({page})=>
            {
                await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
                page.on('dialog',dialog=>dialog.accept());
            })

            test.skip('Handle Mouse Operations',async ({page})=>
                {
                    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
                    
            
                })

                test.skip('Handle Upload File',async ({page})=>
                    {
                        await page.goto('https://practice.expandtesting.com/upload');
                        await page.locator('#fileInput').setInputFiles("D:/Playwright Code/tests/Files/New Microsoft Word Document.docx");
                        await page.locator('#fileSubmit').click();                
                    })

                    test.only('Handle Frames',async ({page})=>
                        {
                            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
                            const frame1= page.frameLocator('#courses-iframe');
                            const print= await frame1.locator("//a[text()='Login']");
                            console.log(print.innerText);
                            
                              
                        })
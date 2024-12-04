const {test,expect}=require('@playwright/test')
test('EndToEnd',async({page})=>
{
await page.goto("https://www.indium.tech/");
await page.waitForLoadState('networkidle');
const service= await page.locator("//span[@class='mega-indicator']/ancestor::li[@id='mega-menu-item-22397']").click();
const quality=await page.locator("//li[@id='mega-menu-item-27024']//a").click();
const alllinks=await page.$$("//li[@id='mega-menu-item-27022']//ul//li/a");
console.log("Number of links are" +alllinks.length);
})

<suite name="Suite1" parallel="classes">
    <test thread-count="5" name="Test">
        <groups>
            <run>
                <include name="smoke" />
            </run>
        </groups>
        <classes>
            <class name="TestClasses.TestClass1" />
            <class name="TestClasses.TestClass2" />
            <class name="TestClasses.TestClass3" />
        </classes>
    </test>
</suite>




<suite name="Suite1" parallel="classes">
  <test thread-count="5" name="Test">
  <groups>
            <run>
                <include name="smoke" >
                </include>>
            </run>
        </groups>
  
  <classes>
            <class name="TestClasses.TestClass1" />
            <class name="TestClasses.TestClass2" />
            <class name="TestClasses.TestClass3" />
        </classes>
  
  </test> 
</suite> 

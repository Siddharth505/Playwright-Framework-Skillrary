const {test,expect} = require('@playwright/test')
import { Class1 } from '../Sprint1Pages/Class1';
import { Class2 } from '../Sprint1Pages/Class2';

test('Test Search Functionality',async({page})=>
{
    const Obj1=new Class1(page);
    await Obj1.geturl();
    await Obj1.searchProducts();
})

test('Cart Test',async({page})=>
{
 const obj2=new Class2(page);
 obj2.getUrl1();
 obj2.VerifyCart();
})

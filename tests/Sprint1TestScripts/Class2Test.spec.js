const {test,expect} = require('@playwright/test')
import { Class1 } from '../Sprint1Pages/Class1';


test('Test Search Functionality',async({page})=>
{
    const Obj1=new Class1(page);
    await Obj1.geturl();
    await Obj1.searchProducts();

    let fname='My name is Raj'
    fname.charAt(3)
})
import { test, expect } from '@playwright/test';
import { Login } from '../POMPages/Login';
import { MyInfo } from '../POMPages/MyInfo';

test('TestLoginPage',async ({page})=>
{
    //Login
 const obj=new Login(page);
 obj.getUrl();
 await page.pause();
 obj.LoginMethod('Admin','admin123');
 await page.waitForTimeout(4000);

 //Home
 const obj2=new MyInfo(page);
 obj2.ClickButtons();
});
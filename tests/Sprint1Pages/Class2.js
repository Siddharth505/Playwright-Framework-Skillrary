const { expect } = require("@playwright/test");

exports.Class2=class Class2
{
constructor(page)
{
    this.page=page;
    this.cartLink=".nav-a nav-a-2 nav-progressive-attribute";
    
}

async getUrl1()
{
    await this.page.goto("https://www.amazon.com/");
}

async VerifyCart()
{
    await this.page.waitForTimeout(10000);
    //await this.page.locator(this.cartLink).click();
    //await expect(this.page).toHaveTitle('Amazon.com Shopping Cart');
}
}

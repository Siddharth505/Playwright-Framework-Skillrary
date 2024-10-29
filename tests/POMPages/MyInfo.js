exports.MyInfo=class MyInfo
{
    constructor(page)
    {
        this.page=page;
        this.myInfoLink="//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']/ancestor::a[@class='oxd-main-menu-item active']";
        this.contactDetailslink="//a[text()='Contact Details']";
        this.submitButton="//button[@type='submit']";
    }

    async ClickButtons()
    {
        await this.page.locator(this.myInfoLink).click();
        await this.page.locator(this.contactDetailslink).click();
        await this.page.locator(this.submitButton).click();
    }
}
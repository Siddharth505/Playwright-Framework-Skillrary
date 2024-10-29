exports.Login=class Login
{
    constructor(page)
    {
        this.page=page;
        this.usernametextfield="//input[@name='username']";
        this.passwordtextfield="//input[@name='password']";
        this.loginbutton="//button[@type='submit']";        
    }

    async getUrl()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async LoginMethod(username,password)
    {
        await this.page.locator(this.usernametextfield).fill(username);
        await this.page.locator(this.passwordtextfield).fill(password);
        await this.page.locator(this.loginbutton).click();
    }

}
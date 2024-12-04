exports.Class1= class Class1
{
    constructor(page)
    {
        this.page=page;
        this.searchfield='#twotabsearchtextbox';
    }

    async geturl()
    {
        await this.page.goto("https://www.amazon.com/");
    }

    async searchProducts ()
    {
        await this.page.locator(this.searchfield).fill("Sony Headphones");
        await this.page.locator(this.searchfield).press('Enter');
    }
}
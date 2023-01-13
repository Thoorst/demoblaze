const url = `https://www.demoblaze.com/`

export default class Page {
    get navbarSignIn () {
        const logIn = 'a=Log in'
        $(logIn).waitForClickable({ timeout: 3000 })
        return $(logIn);
    }

    get btnClose () {
        return $('button="Close"');
    }

    get navbarSignUp () {
        return $('#signin2');
    }

    get navbarSignOut () {
        return $('#logout2');
    }

    get navbarCart () {
        return $('#cartur');
    }

    get navbarAboutUs () {
        return $('');
    }

    get navbarHome () {
        return $('//a[text()="Home "]');
    }

    get navbarContact () {
        return $('');
    }

    get sidebarPhones () {
        return $('a=Phones');
    }

    get sidebarLaptops () {
        return $('a=Laptops');
    }

    get sidebarMonitors () {
        return $('a=Monitors');
    }

    get linkSamsung(){
        return $('a=Samsung galaxy s6')
    }

    get linkNexus(){
        return $('a=Nexus 6')
    }

    get linkIphone(){
        return $('a=Iphone 6 32gb')
    }

    async clickSignIn () {
        await this.navbarSignIn.click()
    }

    async clickNavbarCart () {
        await this.navbarCart.click()
    }

    async clickNavbarHome () {
        await this.navbarHome.click()
    }

    async clickPhones(){
        await this.sidebarPhones.click()
    }

    async clickLaptops(){
        await this.sidebarLaptops.click()
    }

    async clickMonitors(){
        await this.sidebarMonitors.click()
    }

    async clickSamsung(){
        await this.linkSamsung.click()
    }

    async clickLinkNexus(){
        await this.linkNexus.click()
    }

    async clickLinkIphone(){
        await this.linkIphone.click()
    }

    open () {
        return browser.url(url)
    }
}

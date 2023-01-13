import Page from './page.js';

//Credentials need to be moved to separate file and added to .gitignore
const name = 'automatedUser'
const pass = 'Password1@'

class LoginModal extends Page {
    get inputUsername () {
        $('#loginusername').waitForDisplayed({timeout: 2000})
        return $('#loginusername');
    }

    get inputPassword () {
        $('#loginpassword').waitForDisplayed({timeout: 2000})
        return $('#loginpassword');
    }

    get btnLogIn () {
        $('//button[text()="Log in"]').waitForDisplayed({timeout: 2000})
        return $('//button[text()="Log in"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogIn.click();
    }

    async loginBaseUser () {
        await this.login(name, pass)
    }

    open () {
        return super.open();
    }
}

export default new LoginModal();

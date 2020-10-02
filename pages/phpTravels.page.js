class Travel {
    get pageHeader() { return $('.yx-n_w') };
    get credentialsFromHomePage() { return $('.col-md-8 .row') };
    get myAccountButton() { return $('//li[3]/div') };
    get loginButton() { return $('//a[@class="dropdown-item active tr"]') };
    get emailField() { return $('.wow input[type="email"]') };
    get passwordField() { return $('.wow input[type="password"]') };
    get loginButtonFromLoginPage() { return $('#loginfrm button[type="submit"]') };
    get sureThatYouLogined() { return $(' div:nth-child(1) .col-md-8 > h3')};

    getCreds() {
        this.credentialsFromHomePage.waitForDisplayed();
        const textContentus = this.credentialsFromHomePage.getAttribute('textContent');
        const inf = textContentus.split(/[ | \n]/);
        return {email: inf[2],
                pass: inf[4]};
    };

    clickMyAccountButton() {
        this.myAccountButton.waitForDisplayed();
        this.myAccountButton.click();
    };

    clickLoginButton() {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    };

    enterEmail(text) {
        this.emailField.waitForDisplayed()
        this.emailField.setValue(text)
    }

    enterPassword(text) {
        this.passwordField.waitForDisplayed()
        this.passwordField.setValue(text)
    }

    clickLoginButtonFromLoginPage() {
        this.loginButtonFromLoginPage.waitForDisplayed()
        this.loginButtonFromLoginPage.click()
    }

    beSureTHatYouLogined() {
        this.sureThatYouLogined.waitForDisplayed()
    }

}

module.exports = new Travel();
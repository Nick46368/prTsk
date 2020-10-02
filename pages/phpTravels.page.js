class Travel {
    get pageHeader() { return $('.yx-n_w') };
    get credentialsFromHomePage() { return $('.col-md-8 .row') };
    get myAccountButton() { return $('//li[3]/div') };
    get loginButton() { return $('//a[@class="dropdown-item active tr"]') };
    //LoginPage
    get emailField() { return $('.wow input[type="email"]') };
    get passwordField() { return $('.wow input[type="password"]') };
    get loginButtonFromLoginPage() { return $('#loginfrm button[type="submit"]') };
    get sureThatYouLogined() { return $(' div:nth-child(1) .col-md-8 > h3')};
    //from Accountpage"Demo" to the HomePage
    get homePageButton() { return $('a[href^="https"][title="home"]') };
    get tourNavButton() { return $('nav li:nth-child(5) a') };
    get destinationDropdownClosed() { return $('//*[@id="s2id_autogen22"]') };
    get destinationDropdownOpened() { return $('//*[@id="select2-drop"]')};
    get destinationDropdownBigBus() { return $('#select2-drop li:nth-child(1) li:nth-child(2)')};
    get tourTypeDropdown() { return $('#tours div[class^="chosen-container"]') };
    get tourTypeDropdownFerry() { return $('#tours li:nth-child(5)') };
    get dateForm() { return $('#tours input[id="DateTours"]') };
    tourDate = '06/05/2021';
    get adultsValueUp() { return $('#tours .btn.btn-white.bootstrap-touchspin-up') }
    get searchButton() { return $('#tours button[type="submit"]') }


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
        this.emailField.waitForDisplayed();
        this.emailField.setValue(text);
    }

    enterPassword(text) {
        this.passwordField.waitForDisplayed();
        this.passwordField.setValue(text);
    }

    clickLoginButtonFromLoginPage() {
        this.loginButtonFromLoginPage.waitForDisplayed();
        this.loginButtonFromLoginPage.click();
    }

    beSureThatYouLogined() {
        this.sureThatYouLogined.waitForDisplayed();
    }

    clickHomePageButton() {
        this.homePageButton.waitForDisplayed();
        this.homePageButton.click();
    }

    clickTourNavButton() {
        this.tourNavButton.waitForDisplayed();
        this.tourNavButton.click();
    }

    clickDestinationDropdown() {
        this.destinationDropdownClosed.waitForDisplayed();
        this.destinationDropdownClosed.click();
        this.destinationDropdownOpened.waitForDisplayed();
        this.destinationDropdownOpened.click();
    }

    clickDestinationDropdownBigBus() {
        this.destinationDropdownBigBus.waitForDisplayed();
        this.destinationDropdownBigBus.click();
    }

    clickTourTypeButton() {
        this.tourTypeDropdown.waitForDisplayed();
        this.tourTypeDropdown.click();
    }

    clickTourTypeDropdownFerry() {
        this.tourTypeDropdownFerry.waitForDisplayed();
        this.tourTypeDropdownFerry.click();
    }

    clearDateField() {
        this.dateForm.waitForDisplayed();
        this.dateForm.clearValue();
    }

    enterTourDate(text) {
        this.dateForm.setValue(text);
    }

    AdultsValueUp() {
        this.adultsValueUp.waitForDisplayed()
        this.adultsValueUp.click()
    }

    clickOnTheSearchButton() {
        this.searchButton.waitForDisplayed()
        this.searchButton.click()
    }

}

module.exports = new Travel();
class Travel {
    get pageHeader() { return $('.yx-n_w') };
    get credentialsFromHomePage() { return $('.col-md-8 .row') };
    get myAccountButton() { return $('//li[3]/div') };
    get loginButton() { return $('//a[@class="dropdown-item active tr"]') };
    //LoginPage
    get emailField() { return $('.wow input[type="email"]') };
    get passwordField() { return $('.wow input[type="password"]') };
    get loginButtonFromLoginPage() { return $('#loginfrm button[type="submit"]') };
    //Acc page
    get sureThatYouLogined() { return $('div:nth-child(1) .col-md-8 h3')};
    get homePageButton() { return $('a[href^="https"][title="home"]') };
    get invoiceButton() { return $('div:nth-child(3) > div.col-md-2.offset-0.o1 > a') };
    //from Accountpage "Demo" to the HomePage
    get tourNavButton() { return $('nav li:nth-child(5) a') };
    get destinationDropdownClosed() { return $('#tours .form-group div[class^=select2-container]') };
    get destinationDropdownOpened() { return $('//*[@id="select2-drop"]')};
    get destinationDropdownBigBus() { return $('#select2-drop li:nth-child(1) li:nth-child(2)')};
    get tourTypeDropdown() { return $('#tours div[class^="chosen-container"]') };
    get tourTypeDropdownFerry() { return $('#tours li:nth-child(5)') };
    get dateForm() { return $('#tours input[id="DateTours"]') };
    get adultsValueUp() { return $('#tours .btn.btn-white.bootstrap-touchspin-up') };
    get searchButton() { return $('#tours button[type="submit"]') };
    //Big Bus Tour of Dubai after click on search button
    get dateFormFromBookingOptions() { return $('.row .col-12 input[placeholder=Date]') };
    get changeDateButton() { return $('//aside//div[2]/button') };
    get adultsValueUpFromBookingOptions() { return $('[id=selectedAdults]') };
    get secondAdultsValueUpFromBookingOptions() { return $('[id=selectedAdults] option:nth-child(2)') };
    get bookNowButton() { return $('//div/form/button') };
    //confirm Page
    get notesField() { return $('#loggedform textarea') };
    notesText = 'Avē Imperātor, moritūrī tē salūtant!';
    get confirmThisBookingButton() { return $('#bookingdetails button[type=submit]') };
    //paying page
    get unpaidBanner() { return $('.unpaid .content') };
    get dropdownLoginButton() { return $('.d-none.d-md-block.fl') };
    get accountButton() { return $('a.dropdown-item.active.tr') };
    get payOnArrivalButton() { return $('//*[@id="45"]') };
    get payNowButton() { return $('//center/button[2]') };
    get payByDropdown() { return $('#gateway_chosen') };
    get payByCreditCard() { return $('.chosen-results li[data-option-array-index="3"]') };

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
    };

    enterPassword(text) {
        this.passwordField.waitForDisplayed();
        this.passwordField.setValue(text);
    };

    clickLoginButtonFromLoginPage() {
        this.loginButtonFromLoginPage.waitForDisplayed();
        this.loginButtonFromLoginPage.click();
    };

    beSureThatYouLogined() {
        this.sureThatYouLogined.waitForDisplayed();
    };

    clickHomePageButton() {
        this.homePageButton.waitForDisplayed();
        this.homePageButton.click();
    };

    clickTourNavButton() {
        this.tourNavButton.waitForDisplayed();
        this.tourNavButton.click();
    };

    clickDestinationDropdown() {
        this.destinationDropdownClosed.waitForDisplayed();
        this.destinationDropdownClosed.click();
        this.destinationDropdownOpened.waitForDisplayed();
        this.destinationDropdownOpened.click();
    };

    clickDestinationDropdownBigBus() {
        this.destinationDropdownBigBus.waitForDisplayed();
        this.destinationDropdownBigBus.click();
    };

    clickTourTypeButton() {
        this.tourTypeDropdown.waitForDisplayed();
        this.tourTypeDropdown.click();
    };

    clickTourTypeDropdownFerry() {
        this.tourTypeDropdownFerry.waitForDisplayed();
        this.tourTypeDropdownFerry.click();
    };

    clearDateField() {
        this.dateForm.waitForDisplayed();
        this.dateForm.clearValue();
    };

    enterTourDate(text) {
        this.dateForm.setValue(text);
    };

    AdultsValueUp() {
        this.adultsValueUp.waitForDisplayed();
        this.adultsValueUp.click();
    };

    clickOnTheSearchButton() {
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    };

    clearDateFieldFBO() {
        this.dateFormFromBookingOptions.waitForDisplayed();
        this.dateFormFromBookingOptions.clearValue();
    }

    enterTourDateFBO(text) {
        this.dateFormFromBookingOptions.setValue(text);
    };

    clickChangeDateButton() {
        this.changeDateButton.waitForDisplayed();
        this.changeDateButton.keys("Enter");
    };

    changeNumberOfAdults() {
        this.adultsValueUpFromBookingOptions.waitForDisplayed();
        this.adultsValueUpFromBookingOptions.click();
        this.secondAdultsValueUpFromBookingOptions.waitForDisplayed();
        this.secondAdultsValueUpFromBookingOptions.click();
    };
    
    clickBookNowButton() {
        this.bookNowButton.waitForDisplayed();
        this.bookNowButton.click();
    };

    enterDataIntoTheNotesField(text) {
        this.notesField.waitForDisplayed();
        this.notesField.setValue(text);
    }
    
    clickConfirmButton() {
        this.confirmThisBookingButton.scrollIntoView();
        this.confirmThisBookingButton.waitForDisplayed();
        this.confirmThisBookingButton.click();
    };

    clickDropdownLoginButton() {
        this.dropdownLoginButton.waitForDisplayed();
        this.dropdownLoginButton.click();
    };

    clickAccountButton() {
        this.accountButton.waitForDisplayed();
        this.accountButton.click();
    };

    clickInvoiceButton() {
        this.invoiceButton.waitForDisplayed();
        this.invoiceButton.click();
    };

    clickPayNowButton() {
        this.payNowButton.waitForDisplayed();
        this.payNowButton.click();
    };

    clickPayByDropdown() {
        this.payByDropdown.waitForDisplayed();
        this.payByDropdown.click();
    };

    clickpayByCreditCard() {
        this.payByCreditCard.waitForDisplayed();
        this.payByCreditCard.click();
    }

}

module.exports = new Travel();
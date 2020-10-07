class Travelpage {
    get pageHeader() { return $('.yx-n_w') };
    get credentialsFromHomePage() { return $('#Main div:nth-child(2) div.col-md-9 div.col-md-8 div') };
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
    get urlFromInvoiceButton() { return $('#bookings div:nth-child(3) div.col-md-2.offset-0.o1 a[href^=h]') };
    //from Accountpage "Demo" to the HomePage
    get tourNavButton() { return $('nav a[class^="text-center tours"]') };
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
    get confirmThisBookingButton() { return $('#bookingdetails button[type=submit]') };
    //paying page
    get unpaidBanner() { return $('.unpaid .content') };
    get dropdownLoginButton() { return $('.d-none.d-md-block.fl') };
    get accountButton() { return $('a[class^="dropdown-item active"]') };
    get payOnArrivalButton() { return $('//*[@id="45"]') };
    get payNowButton() { return $('button[type="button"]') };
    get payByDropdown() { return $('#gateway_chosen') };
    get payByCreditCard() { return $('.chosen-results li[data-option-array-index="3"]') };
    //data for assertion
    get dataForAssertion() { return $('.col-12.col-lg-8 div[class^=con]') };
    get firstNameField() { return $('.col-12.col-lg-8 .confirmation-list li:nth-child(3) span.go-left.float-right') };
    get addressField() { return $('.col-12.col-lg-8 .confirmation-list li:nth-child(4)') };
    get mobileNumberField() { return $('.col-12.col-lg-8 .confirmation-list li:nth-child(5)') };
    get notesAdditionalRequestField() { return $('.col-12.col-lg-8 textarea') };

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
        this.accountButton.waitForExist({timeout: 5000});
        this.accountButton.click();
    };

    getUrlFromInvoiceButton() {
        this.urlFromInvoiceButton.waitForDisplayed();
        const url = this.urlFromInvoiceButton.getAttribute('href');
        console.log(url);
        return url;
    };

    clickInvoiceButton() {
        this.invoiceButton.waitForDisplayed();
        this.invoiceButton.click();
    };
    
    takeDataForAssertion() {
        // const currentUrl = browser.getUrl();
        // console.log(currentUrl);
        this.dataForAssertion.waitForExist();
        const dataFromPayPage = this.dataForAssertion.getAttribute('textContent');
        let ass0 = dataFromPayPage.split(/[ | \n]/).join(' ');
       // let ass1 = ass0.map(function (str) { replaced = str.replace(/\s+/g,''); return replaced;});
        console.log(ass0);
    };

    clickPayNowButton() {
        this.payNowButton.waitForEnabled();
        this.payNowButton.keys("Enter");
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

module.exports = new Travelpage();
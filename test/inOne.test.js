const Travelpage = require('../pages/phpTravels.page');
const loginData = require('../data/loginData.js');
const { expect, assert } = require('chai');

describe('Practical task', function() {
    let creds;
    let urlFromInvBtn;
    let dataForAss;

    it('Should save credentials for the "Homepage Front-End"', () => { //(mocha|jasmine) i.e. before and beforeEach hook
        browser.maximizeWindow();
        browser.url(`${browser.options.baseUrl}`);

        //Check that page is opened
        Travelpage.pageHeader.isDisplayed();

        //Save credentials
        creds = Travelpage.getCreds();
    })
    it('Navigate to the: https://www.phptravels.net/ and successfully login', () => {
        browser.url('https://www.phptravels.net/');
        Travelpage.clickMyAccountButton();
        Travelpage.clickLoginButton();

        //login with creds
        Travelpage.enterEmail(creds.email);
        Travelpage.enterPassword(creds.pass);
        Travelpage.clickLoginButtonFromLoginPage();

        //check login is completed
        Travelpage.beSureThatYouLogined();
    })
    it('Search and book Dubai Bus Tour', () => {
        Travelpage.clickHomePageButton();
        Travelpage.clickTourNavButton();
        Travelpage.clickDestinationDropdown();
        Travelpage.clickDestinationDropdownBigBus();
        Travelpage.clickTourTypeButton();
        Travelpage.clickTourTypeDropdownFerry();
        Travelpage.clearDateField();
        Travelpage.enterTourDate(loginData.tourDate);
        Travelpage.AdultsValueUp();
        Travelpage.clickOnTheSearchButton();
        //book now
        Travelpage.clearDateFieldFBO();
        Travelpage.enterTourDateFBO(loginData.tourDate);
        Travelpage.clickChangeDateButton();
        Travelpage.changeNumberOfAdults();
        Travelpage.clickBookNowButton();
    })
    it('Complete booking with entering appropriate info', () => {
        Travelpage.enterDataIntoTheNotesField(loginData["Notes / Additional Request"]);
        Travelpage.clickConfirmButton();
        Travelpage.unpaidBanner.waitForEnabled();
    })
    it('Navigate to the Account and open Invoice for the completed booking', () => {
        Travelpage.clickDropdownLoginButton();
        Travelpage.clickAccountButton();
        urlFromInvBtn = Travelpage.getUrlFromInvoiceButton();
        Travelpage.clickInvoiceButton();
    })
    it('Check booking details by comparing with test data', () => {
        browser.switchWindow('https://www.phptravels.net/account');
        browser.switchWindow('Invoice');
        dataForAss = Travelpage.takeDataForAssertion();
        assert.deepStrictEqual(dataForAss["First Name"], loginData["First Name"]);
        assert.deepStrictEqual(dataForAss.Address, loginData.Address);
        assert.deepStrictEqual(dataForAss["Mobile Number"], loginData["Mobile Number"]);
        assert.deepStrictEqual(dataForAss["Notes / Additional Requests"], loginData["Notes / Additional Request"]);
    })
    it('Click on "Pay Now" with Credit Card credentials', () => {
        Travelpage.clickPayNowButton(); 
        Travelpage.clickPayByDropdown();
        Travelpage.clickPayByCreditCard();
        Travelpage.enterCCFirstNameField(loginData["First Name"]);
        Travelpage.enterCCLastNameField(loginData["Last Name"]);
        Travelpage.enterCCardNumber(loginData["Card Number"]);
        Travelpage.enterCCExpirationDate();
        Travelpage.enterCCExpirationDateYear();
        Travelpage.enterCVV(loginData["Card CVV"]);
        Travelpage.getInvalidBanner();
    })
})
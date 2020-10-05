const Travelpage = require('../pages/phpTravels.page');
const loginData = require('../data/loginData.js');

describe('Practical task', function() {
    let creds;

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
        Travelpage.clearDateFieldFBO();
        Travelpage.enterTourDateFBO(loginData.tourDate);
        Travelpage.clickChangeDateButton();
        Travelpage.changeNumberOfAdults();
        Travelpage.clickBookNowButton();
    })
    it('Complete booking with entering appropriate info', () => {
        Travelpage.enterDataIntoTheNotesField(Travelpage.notesText);
        Travelpage.clickConfirmButton();
        Travelpage.unpaidBanner.waitForEnabled();
    })
    it('Navigate to the Account and open Invoice for the completed booking', () => {
        Travelpage.clickDropdownLoginButton();
        Travelpage.clickAccountButton();
        Travelpage.clickInvoiceButton();
        Travelpage.payNowButton.waitForEnabled();
        Travelpage.clickPayNowButton();
        browser.pause(3000)
    });
})
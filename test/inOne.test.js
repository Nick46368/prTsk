const Travelpage = require('../pages/phpTravels.page')

describe('Practical task', function() {
    let creds;

    it('Should save credentials for the "Homepage Front-End"', () => { //(mocha|jasmine) i.e. before and beforeEach
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
        Travelpage.enterEmail(creds.email)
        Travelpage.enterPassword(creds.pass)
        Travelpage.clickLoginButtonFromLoginPage()

        //check login is completed
        Travelpage.beSureThatYouLogined()
    })
    it('Search and book Dubai Bus Tour', () => {
        Travelpage.clickHomePageButton()
        Travelpage.clickTourNavButton()
        Travelpage.clickDestinationDropdown()
        Travelpage.clickDestinationDropdownBigBus()
        Travelpage.clickTourTypeButton()
        Travelpage.clickTourTypeDropdownFerry()
        Travelpage.clearDateField()
        Travelpage.enterTourDate(Travelpage.tourDate)
        Travelpage.AdultsValueUp()
        Travelpage.clickOnTheSearchButton()
        browser.pause(3000)
    })
})
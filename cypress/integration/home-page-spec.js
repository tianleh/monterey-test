import { HOME_PAGE_ELEMENTS } from "./page-elements";
import { HomePage } from './home-page'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const homePage = new HomePage();

describe('search amazon on google', () => {
    beforeEach(() => {
        homePage.open();
    })

    it('type and search', () => {
        homePage.clickSearchBox();

        homePage.typeInSearchBox("amazon");

        homePage.submitSearchQuery()
    })
})

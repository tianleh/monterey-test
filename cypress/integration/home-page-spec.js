import { HomePage } from '@tianleh/tianleh-test-utility'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const homePage = new HomePage(cy);

describe('search amazon on google', () => {
    beforeEach(() => {
        homePage.open('https://www.google.com/');
    })

    it('type and search', () => {
        homePage.clickSearchBox();

        homePage.typeInSearchBox("amazon");

        homePage.submitSearchQuery()
    })
})

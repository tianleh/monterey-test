import { LoginPage } from '@tianleh/tianleh-test-utility'

const loginPage = new LoginPage(cy);

describe('login into security enabled cluster', () => {
    beforeEach(() => {
        cy.visit('localhost:5601');
    })

    it('type user name and password to login', () => {
        loginPage.enterUserName('admin')

        loginPage.enterPassword('admin')

        loginPage.submit()

        cy.url().should('include', '/app/home#/')
    })
})

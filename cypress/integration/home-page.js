import { HOME_PAGE_ELEMENTS } from './page-elements'

export class HomePage {

    open(url) {
        cy.visit('https://www.google.com/')
    }

    clickSearchBox() {
        cy.get(HOME_PAGE_ELEMENTS.SEARCH_BOX)
            .click()
    }

    typeInSearchBox() {
        cy.get(HOME_PAGE_ELEMENTS.SEARCH_BOX)
            .type('amazon')
    }

    submitSearchQuery() {
        cy.get(HOME_PAGE_ELEMENTS.SEARCH_BOX)
            .type(`{enter}`)

    }
}
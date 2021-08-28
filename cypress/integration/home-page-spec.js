Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});

describe('open google', () => {
    it('type and search', () => {

        cy.visit('https://www.google.com/')

        cy.get('.gLFyf')
            .type('amazon')

        cy.get('.gLFyf')
            .type(`{enter}`)
        
    })
})

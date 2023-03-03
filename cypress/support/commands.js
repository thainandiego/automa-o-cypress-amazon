Cypress.Commands.add('buscarProduto', (produto)=> {
    cy.get('#twotabsearchtextbox').type(produto)
    cy.get('#nav-search-submit-button').click()
    cy.contains('.a-color-state', produto)
})
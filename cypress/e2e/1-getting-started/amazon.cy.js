

describe('Site de e-commerce Amazon',function () {
  beforeEach(function () {
      cy.visit('https://www.amazon.com.br')
  })
  it('Verifica o titulo da aplicação', function () {   
      cy.get('#nav-logo-sprites').should('be.visible')
  })
  it('Buscar Produto', ()=>{
    const produto = 'iphone'
    cy.buscarProduto(produto)
  })
  it('Adicionar produto no carrinho', ()=>{
    const produto = 'playstation'
    cy.buscarProduto(produto)
    cy.get("[data-asin='B0BLW5C5KN'] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-price-instructions-style > :nth-child(1) > .a-size-base").click();
    cy.get('#add-to-cart-button').click()
    cy.contains('Adicionado ao carrinho').should('be.visible')
  })

  it('Adicionar 3 produtos no carrinho', ()=>{
    
    cy.get('#twotabsearchtextbox').type('codigo limpo').type('{enter}');
    cy.get('[data-asin="8576082675"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
    cy.get('#add-to-cart-button').click();

    cy.get('#twotabsearchtextbox').clear().type('burigotto ecco').type('{enter}');
    cy.get('[data-asin="B087RYZ59K"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
    cy.get('#add-to-cart-button').click();

    cy.get('#twotabsearchtextbox').clear().type('fone bluetooh philips').type('{enter}');
    cy.get('[data-asin="B08SC1SVQ8"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
    cy.get('#add-to-cart-button').click();

    cy.get('#nav-cart-count').click();
    cy.get('#sc-subtotal-amount-buybox > .a-size-medium').should('be.visible')

  })

  it.only('Criar uma nova conta', ()=>{

    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#createAccountSubmit').click();

    cy.get('#ap_customer_name').type('Diego Thainan');
    cy.get('#ap_email').type('thainandiego@bol.com.br');
    cy.get('#ap_password').type('@Avenue2023');
    cy.get('#ap_password_check').type('@Avenue2023');

    cy.get('#continue').should('be.visible')
  })
})



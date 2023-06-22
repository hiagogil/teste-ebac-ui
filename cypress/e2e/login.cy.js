/// <reference types="cypres" />

context('Funcionalidade fazer login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

it('Deve fazer login com sucesso', () => {

    cy.get('#username').type('alunoteste@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
})

it('Deve exibir mensagem de erro ao inserir senha errada', () => {

    cy.get('#username').type('alunoteste@teste.com')
    cy.get('#password').type('teste@teste1')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'senha')
})

it('Deve exibir mensagem de erro ao inserir e-mail errado', () => {

    cy.get('#username').type('alunoteste12@teste.com')
    cy.get('#password').type('teste@testee')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'e-mail')

})
})
/// <reference types="cypres" />

context('Funcionalidade fazer login' , () => {
    
})

it('Deve fazer login com sucesso' , () =>{

    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('alunoteste@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá')
})

it('Deve exibir mensagem de erro ao inserir senha errada' , () =>{

    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('alunoteste@teste.com')
    cy.get('#password').type('teste@teste1')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'senha')
})

it.only('Deve exibir mensagem de erro ao inserir e-mail errado' , () =>{

    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('alunoteste12@teste.com')
    cy.get('#password').type('teste@testee')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail')

})
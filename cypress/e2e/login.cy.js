/// <reference types="cypres" />
const perfil = require('../fixtures/perfil.json')
context('Funcionalidade fazer login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')

    });

    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('alunoteste@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    });

    it.only('Deve fazer login com sucesso - usado fixture', () => {

        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')

        })
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
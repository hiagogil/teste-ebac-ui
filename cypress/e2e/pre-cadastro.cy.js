/// <reference types="cypres" />
const  { faker }  =  require ( '@faker-js/faker' ) ;

describe('Funcionalidade pre cadastro', () => {
    
    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

it('Deve completar o pré-cadastro com sucesso', () =>{
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('12345TESTE')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstName( ))
    cy.get('#account_last_name').type(faker.name . lastName ( ))

});


});
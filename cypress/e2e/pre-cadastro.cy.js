/// <reference types="cypres" />
const  { faker }  =  require ( '@faker-js/faker' ) ;

describe('Funcionalidade pre cadastro', () => {
    
    beforeEach(() => {

        cy.visit('minha-conta')

    });

it.only('Deve completar o pré-cadastro com sucesso', () =>{
    
    let emailfaker = faker.internet.email()
    let nomeFaker = faker.name.firstName( )
    let lastFaker = faker.name . lastName ( )

    cy.get('#reg_email').type(emailfaker)
    cy.get('#reg_password').type('12345TESTE')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nomeFaker)
    cy.get('#account_last_name').type(lastFaker)

});


});
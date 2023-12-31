/// <reference types="cypress" />


describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {

        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {

        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', '3')
    });

    it.only('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Brown', '3')
    });
});
/// <reference types="cypress" /> 

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        // cy.get('[class="product-block grid]').first().click()
        cy.get('.product-block')
            // .first()
            // .last()
            // .eq(3)
            .contains('Abominable Hoodie')
            .click()

    });

    it.only('Deve adicionar produtos no carrinho', () => {
        let quantidade = 2

        cy.get('.product-block').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', '2 × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});
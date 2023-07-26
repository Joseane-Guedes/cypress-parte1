/// <reference types="cypress" /> 

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
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

    it('Deve adicionar produtos no carrinho', () => {
        let quantidade = 2

        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produtos no carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
    });

    it.only('Deve adicionar produtos no carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', 3)
    });
});
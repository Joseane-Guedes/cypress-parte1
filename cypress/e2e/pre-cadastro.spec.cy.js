import { faker } from '@faker-js/faker';

describe('Funcionalidade pré-cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    it('Deve completar o pré-cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobreNomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email()


        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobreNomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o pre-cadastro com sucesso usando comandos customizados ', () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha!@#forte.com', 'Josie', 'Guedes')
    });
})
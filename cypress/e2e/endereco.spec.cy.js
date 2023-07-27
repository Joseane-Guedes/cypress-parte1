import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Fabio', 'Silva', 'EBAC', 'Brasil', 'Av Brasil', '200', 'Joao Pessoa', 'Paraiba', '69078365', '988019557', 'meuemail@email.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});


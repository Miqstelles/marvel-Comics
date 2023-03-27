describe('Comics', () => {
    it('renders comics', () => {
        cy.visit('/'); // assume que a home page está na raiz do servidor

        cy.contains('A').click(); // clica no botão da letra A

        cy.get('div.ComicsDiv') // verifica se há pelo menos um quadrinho renderizado
            .find('img')
            .should('have.attr', 'alt');
    });

    it('changes pages', () => {
        cy.visit('/');

        cy.contains('1').should('have.css', 'background-color', 'rgb(240, 19, 30)'); // verifica se o botão da primeira página está selecionado
        cy.contains('2').click(); // clica no botão da segunda página
        cy.contains('1').should('not.have.css', 'background-color', 'rgb(240, 19, 30)'); // verifica se o botão da primeira página não está mais selecionado
        cy.contains('2').should('have.css', 'background-color', 'rgb(240, 19, 30)'); // verifica se o botão da segunda página está selecionado
    });

    it('navigates to comic details', () => {
        cy.visit('/');

        cy.get('div.ComicsDiv') // verifica se há pelo menos um quadrinho renderizado
            .find('a')
            .first()
            .click(); // clica no primeiro link para os detalhes do quadrinho

        cy.url().should('match', /\/ComicDetails\/\d+$/); // verifica se a URL mudou para a página de detalhes do quadrinho
    });
});

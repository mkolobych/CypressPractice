describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.get("#js-link-box-en").click();

        cy.get("li[id='pt-createaccount-2'] a").should('be.visible');
        cy.contains("Create account");

        cy.get("li[id='pt-login-2'] a");
        cy.get("li[id='pt-login-2'] span").should('have.text', 'Log in');

        cy.get("div [id=vector-user-links-dropdown]").should('exist');
    });
});
/// <reference types="Cypress" />

describe('Wikipedia Practice', () => {
    it('passes', () => {
        cy.visit('https://www.wikipedia.org/');
        cy.get("#js-link-box-en").click();

        cy.get("li[id='pt-createaccount-2'] a").as("CreateAccountButton");
        cy.get("@CreateAccountButton").should('be.visible');
        cy.get("@CreateAccountButton").and('have.text', 'Create account');
        cy.contains("Create account");

        cy.get("#right-navigation a").then((elements) => {
            expect(elements.length).to.equal(35);
            expect(elements).to.be.visible;
        })

        cy.get("#right-navigation a").should("have.length", 35);

        cy.go('back');
        cy.go('forward');
    });
});

describe('Wikipedia Practice', () => {
    it('passes', () => {
        cy.visit('https://www.amazon.com/');
        cy.get("#twotabsearchtextbox").focus();
        cy.get("div.left-pane-results-container").children().should('exist');
        cy.screenshot();
    });
});

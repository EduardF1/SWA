/// <reference types="cypress" />

describe('Basic Tests', () => {
    it('The webpage load, at least', () => {
        cy.visit('https://codedamn.com');
    });

    it('Login page looks good', () => {
        cy.viewport(1280, 720);
        cy.visit('https://codedamn.com');

        cy.get('#root > div.relative > header > div > nav > div.hidden > a.text-base').contains('Create Account').click();
        cy.contains('Create Account').should('exist');
        cy.contains('Sign up with Google').should('exist');
        cy.contains('Sign up with GitHub').should('exist');
        cy.contains('Terms of Service').should('exist');
    });

    it('Login page links work', () => {
        cy.viewport(1280, 720);

        // 1. Main page
        cy.visit('https://codedamn.com');
        // 2. Create account page
        cy.contains('Create Account').click();
        cy.log('Going to terms of service');
        // 3. Terms of service page
        cy.contains('Terms of Service').click();
        // 4. Assert Terms of service page url
        cy.url().should('include', '/terms-of-service');

        cy.url().then( value => {
           cy.log('The current real URL is: ', value);
        });
        // 5. Go back to the Create account page
        cy.go('back');
        // 6. Assert that the current page is the Create Account page
        cy.contains('Create Account');
        cy.url().should('include', '/register');
    });

});
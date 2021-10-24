/// <reference types="cypress" />

/**
 * Below, test desktop first, then mobile.
 */
describe('Basic test', () => {
   it('Every basic element exists', () => {
      cy.viewport(1280, 720);
      cy.visit('https://codedamn.com');
   });

   it('Every basic element exists on mobile', () => {
      cy.viewport('iphone-x');
      cy.visit('https://codedamn.com');
   });
});
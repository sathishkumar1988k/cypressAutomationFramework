import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import testData from '../../fixtures/uiTestData.json';

Given('the user lauch the practice test automation website', () => {
    cy.visit(testData.url);
});

When('the user enter {string} as username and {string} as passwod and click on Submit button', (username, password) => {
   cy.get('#username').type(username);
   cy.get("[name='password']").type(password);
   cy.get('#submit').click();
});

Then('verify home page is displayed', () => {
    cy.get('.post-title').should('have.text','Logged In Successfully');
});

Then('verify invalid username error message is displayed', () => {
    cy.get('.show').should('have.text','Your username is invalid!');
});
import { Given, When, Then, attach } from "@badeball/cypress-cucumber-preprocessor";
import homepage from '../../support/homepage.js';

Then('verify home page is displayed', () => {
    homepage.verifyLoginSuccessMessage("Logged In Successfully");
    cy.screenshot();
});
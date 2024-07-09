import { Given, When, Then, attach } from "@badeball/cypress-cucumber-preprocessor";
import testData from '../../fixtures/uiTestData.json';
import loginpage from '../../support/loginpage.js';

Given('the user launch the practice test automation website', () => {
    cy.visit(testData.url);
});

When(/^the user enter "([^"]*)" as username and "([^"]*)" as password and click on Submit button$/, (username, password) => {
    loginpage.fillUserName(username);
    loginpage.fillPassword(password);
    loginpage.submit();
});

Then('verify invalid username error message is displayed', () => {
    loginpage.verifyLoginErrorMessage("Your username is invalid!");
    cy.screenshot();
});
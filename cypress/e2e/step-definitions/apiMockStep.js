import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import apiMockPage from '../../support/apimocks.js';

Given('the GET single user request is mocked with {string}', (mockData) => {
    cy.intercept('GET','https://reqres.in/api/users/2',{
        statusCode: apiMockPage[mockData]["statusCode"],
        body: apiMockPage[mockData]["body"],
    });
});





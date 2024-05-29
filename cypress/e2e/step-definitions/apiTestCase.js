import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the list of users GET request available in reqres.in', () => {
    // Check the reqres.in page is working fine
});

When('the GET request is triggered to get the list of users', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2').as('getUsers');
});

Then('verify list of users API response code is {int}', (getResponseCode) => {
    cy.get('@getUsers').then((response) => {
        expect(response.status).to.eq(getResponseCode);
    });
});

Then('verify list of users API response body should have {string}', (responseText) => {
    cy.get('@getUsers').then((response) => {
        const responseBody = JSON.stringify(response.body);
        expect(responseBody).to.include(responseText);
    });
});

Given('the create user POST request available in reqres.in', () => {
    // Check the reqres.in page is working fine
});

When('the POST request is triggered to create an user with name as {string} and job as {string}', (username, job) => {
    cy.request('POST','https://reqres.in/api/users',{'name':username,'job':job}).as('postCreateNewUser')
});

Then('verify create new user API response code is {int}', (createNewUserResponseCode) => {
    cy.get('@postCreateNewUser').then((response) => {
        expect(response.status).to.eq(createNewUserResponseCode);
    });
});

Then('verify create new user API response body should have {string}', (responseText) => {
    cy.get('@postCreateNewUser').then((response) => {
        const responseBody = JSON.stringify(response.body);
        expect(responseBody).to.include(responseText);
    });
});



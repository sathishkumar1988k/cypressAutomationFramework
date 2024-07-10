@Web @Regression
Feature: Verify cy.intercept functionality in cypress
    @Smoke 
    Scenario: Verify the browser network request is mocked for GET single user api in reqres.in website

    Given the user launch the reqres website
    And the GET single user request is mocked with "validGetSingleUser"
    When the user clicks on GET single user api
    Then the GET single user response code should be 201
    And the GET single user response body contains "Sathish"

        
@Api @Regression
Feature: GET & POST Request in cypress
    @Smoke
    Scenario: GET Request in cypress

        Given the list of users GET request available in reqres.in
        When the GET request is triggered to get the list of users
        Then verify list of users API response code is 200
        And verify list of users API response body should have "Michael"
    
    Scenario: POST Request in cypress

        Given the create user POST request available in reqres.in
        When the POST request is triggered to create an user with name as "Sathish" and job as "SDET"
        Then verify create new user API response code is 201
        And verify create new user API response body should have "Sathish"
@Web @Regression
Feature: Login functionality on practice test automation website
    
    Scenario: Verify invalid user name error message is displayed on practice testautomation with invalid credentials

        Given the user launch the practice test automation website
        When the user enter "Sathish" as username and "password" as password and click on Submit button
        Then verify invalid username error message is displayed
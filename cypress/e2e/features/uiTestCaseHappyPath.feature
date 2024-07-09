@Web @Regression
Feature: Login functionality on practice test automation website - Happy Path Scenario
    @Smoke 
    Scenario: Verify login functionality is working fine in practice testautomation page

        Given the user launch the practice test automation website
        When the user enter "student" as username and "Password123" as password and click on Submit button
        Then verify home page is displayed
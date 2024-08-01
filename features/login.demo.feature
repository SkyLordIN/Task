# As a user, I want to test the login functionality with valid and invalid credentials
Feature: Test Login Functionality
  
  # This scenario tests the login functionality with invalid credentials
  Scenario Outline: Check login with Invalid Credentials
    Given user is on HomePage
    When user clicks on hamburger icon
    And user clicks on login text
    And user enters invalid <uname> & <password>
    Then clicks on login button
    
    # Examples of invalid credentials
    Examples:
      | uname             | password |
      | alice@example.com | 10203040 |
      |           1@2.com | f-o-o    |
      |                   |          |
      | bob@example.com   |          |
  
  # This scenario tests the login functionality with valid credentials
  Scenario Outline: Check login with Valid Credentials
    Given user is on HomePage
    When user clicks on hamburger icon
    And user clicks on login text
    And user enters valid <uname> & <password>
    And clicks on login button
    Then user is navigated to app
    And text <message> is displayed
    
    # Examples of valid credentials
    Examples:
      | uname           | password | message  |
      | bob@example.com | 10203040 | Products |

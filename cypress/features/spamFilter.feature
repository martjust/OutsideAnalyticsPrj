Feature: Spam filter

Background:
    Given user is logged into the Email UI

@smoke
Scenario: Blacklisted address goes to users spam folder
    Given user enters "spammer+1@spam.net" address for spam filter
      And user clicks the add to filter button
    When user receives an incoming message from "spammer+1@spam.net"
    Then message from "spammer+1@spam.net" should be in Junk folder

Scenario Outline: Blacklisted addresses need to be in proper format
    Given user enters <invalidAddress> address for spam filter
    When user clicks the add to filter button
    Then the error message "Address must be in proper format" is displayed

    Examples:
        | invalidAddress |
        | 'invalid'      |
        | ''             |
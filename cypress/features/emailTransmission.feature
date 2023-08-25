Feature: Email Transmission
   As a user of the System I would like the ability to send mail to desired addresses

   #Assume all test data has been seeded before run

Background:
    Given user is logged into the Email UI

@smoke
Scenario: Send message to valid address
    Given user is drafting an email
    When user types "somevalid+txtest@email.com" for "To:" field 
     And sends the message
    Then user's sent messages includes the message sent to "somevalid+txtest@email.com"

@smoke
Scenario: Send Carbon Copy message to valid address
   Given user is drafting an email
    When user types "somevalid+cctxt@email.com" for "Cc:" field 
     And sends the message
    Then user's sent messages includes the message sent to "somevalid+cctxtest@email.com"

@smoke
Scenario: Send Blind Copy message to valid address
   Given user is drafting an email
    When user types "somevalid+bctxt@email.com" for "Bc:" field 
     And sends the message
    Then user's sent messages includes the message sent to "somevalid+bctest@email.com"

@smoke
Scenario: Send message using TO, CC and BC
    Given user is drafting an email
     When user types "somevalid+0@email.com" for "To:" field
      And user types "somevalid+1@email.com" for "Cc:" field
      And user types "somevalid+2@email.com" for "Bc:" field
      And sends the message
    Then user's sent messages includes the message sent to "somevalid+0@email.com"
     And user's sent messages includes the message sent to "somevalid+1@email.com"
     And user's sent messages includes the message sent to "somevalid+2@email.com"

# Assumption: that invalid email address notify the user in some fashion
Scenario Outline: Invalid address cannot be sent message
   Given user is drafting an email
    When user types <invalidAddress> for the "To": field 
     And sends the message
    Then the error message "Address must be in proper format" is displayed

    Examples:
        | invalidAddress |
        | 'invalid'      |
        | ''             |

Scenario: Carbon Copy messages cannot be sent for invalid addresses
   Given user is drafting an email
    When user types "invalid" for the "Cc:" field 
     And sends the message
    Then the error message "Address must be in proper format" is displayed

Scenario: Blind Copy messages cannot be sent for invalid addresses
   Given user is drafting an email
    When user types "invalid" for then "Bc:" field 
     And sends the message
    Then the error message "Address must be in proper format" is displayed

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import DraftPage from "../pages/DraftPage";
import SentMessagesPage from "../pages/SentMessagesPage";

Given('user is drafting an email', () => {
    cy.get('#draft-button').click();
    DraftPage.verifyOnPage();
});

When('sends the message', () => {
    DraftPage.clickSendMessage();
});

When('user types {string} for {string} field', (text, fieldName) => {
    DraftPage.enterAddress(text, fieldName);
});

Then('user\'s sent messages includes the message sent to {string}', (address) => {
    // Assuming that checking the sent messages is the best place to check this. Otherwise
    // you could query the backend to determine if the message made it to the Outgoing server.
    cy.get('#sent-messages').click();
    SentMessagesPage.verifyOnPage();
    SentMessagesPage.checkForMessageTo(address);
});

Then('user gets a response that address not in valid format', () => {
    cy.on('window:alert', errorMsg => {
        expect(errorMsg).to.equal('Address is not in valid format');
    });
});
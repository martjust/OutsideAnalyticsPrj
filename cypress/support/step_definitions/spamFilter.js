import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SpamSettingsPage from "../pages/SpamSetttingsPage";

Given('user enters {string} address for spam filter', (address) => {
    cy.get('#spam-settings').click();
    SpamSettingsPage.verifyOnPage();
    SpamSettingsPage.enterAddressToFilter(address);
});

When('user clicks the add to filter button', () => {
    SpamSettingsPage.clickAddToFilter();
});

When('user receives an incoming message from {string}', (address) => {
    cy.intercept('GET', '/mail', {
        body: [
            { from: `${address}`, subject: null, content: null },
        ],
    });
    cy.get('#sync-button').click();
});

Then('message from {string} should go in Junk folder', (address) => {
    cy.get('#junk-inbox').click();
    SpamSettingsPage.verifyMessageFromExists(address);
});
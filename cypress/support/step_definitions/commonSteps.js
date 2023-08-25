import { Given } from "cypress-cucumber-preprocessor/steps";

Given('user is logged into the Email UI', () => {
  cy.visit('location of the email ui');
});

Then('Then the error message {string} is displayed', (message) => {
  cy.on('window:alert', errorMsg => {
    expect(errorMsg).to.equal(message);
  });
});
const FIELD_TO_ID = {
    'To:': '#to-address',
    'Cc:': '#cc-address',
    'Bc:': '#bc-address',
}

class DraftPage {

    enterAddress(address, fieldName) {
        const fieldId = FIELD_TO_ID[fieldName];
        return cy.get(`#${fieldId}`).clear().type(address);
    }

    clickSendMessage() {
        return cy.get('#send').click();
    }

    verifyOnPage() {
        return cy.title().should('eq', 'Draft Page');
    }

}

export default new DraftPage();
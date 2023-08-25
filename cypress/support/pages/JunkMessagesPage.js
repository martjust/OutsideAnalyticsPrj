class JunkMessagesPage {

    checkForMessageFrom(email) {
        let found = false;
        cy.get("#junk-messages").then((messages) => {
            for (let message of messages) {
                if (message.fromAddress == email) {
                    found = true;
                }
            }
        });
        cy.wrap(found).should("eq", true);
    }

    verifyOnPage() {
        return cy.title().should('eq', 'Junkbox');
    }

}

export default new JunkMessagesPage();
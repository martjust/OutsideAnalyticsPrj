class SentMessagesPage {

    checkForMessageTo(email) {
        let found = false;
        cy.get('#messages-sent').then((messagesSent) => {
            for (let message of messagesSent) {
                if (message.toAddress == email) {
                    found = true;
                }
            }
        });
        cy.wrap(found).should('eq', true);
    }

    verifyOnPage() {
        return cy.title().should('eq', 'Sent Messages');
    }

}

export default new SentMessagesPage();
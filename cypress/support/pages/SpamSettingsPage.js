class SpamSettingsPage {

    blacklistAddress(address) {
        this.enterAddressToFilter(address);
        this.clickAddToFilter();
    }

    enterAddressToFilter(address) {
        cy.get('#block-address-input').clear().type(address);
    }

    clickAddToFilter() {
        cy.get('#add-address-to-filter-button').click();
    }

    verifyMessageFromExists(address) {
        let found = false;
        cy.get("#junk-messages").then((messages) => {
            for (let message of messages) {
                if (message.fromAddress == address) {
                    found = true;
                }
            }
        });
        cy.wrap(found).should("eq", true);
    }

    verifyOnPage() {
        cy.title().should('eq', 'Spam Settings');
    }

}

export default new SpamSettingsPage();
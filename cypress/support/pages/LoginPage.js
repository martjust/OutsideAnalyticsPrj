class LoginPage {

    enterUsernameAndPassword(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        return this;
    }

    clickLoginButton() {
        return cy.get('#login').click();
    }

    verifyOnPage() {
        return cy.title().should('eq', 'Logged in Page');
    }

}

export default new LoginPage();
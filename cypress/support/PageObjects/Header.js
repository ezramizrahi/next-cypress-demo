class Header {
    getLogInButton() {
        return cy.get('[data-cy="log-in-button"]');
    };
};

module.exports = new Header();
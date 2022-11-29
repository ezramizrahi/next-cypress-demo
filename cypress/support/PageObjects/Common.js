class Common {
    // visit baseUrl defined in cypress.config.js
    visitBaseUrl() {
        cy.visit(Cypress.env('baseUrl'));
        cy.log('WHAT IS THE URL? ', Cypress.env('baseUrl'));
    };
};

module.exports = new Common();
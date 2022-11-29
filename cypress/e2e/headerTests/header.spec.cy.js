import Common from '../../support/PageObjects/Common';
import Header from '../../support/PageObjects/Header';

describe('SOME TEST', () => {
    beforeEach(() => {
        // visit baseUrl before each test
        Common.visitBaseUrl();
    });

    it('should have a log in button', () => {
        // Check that the search button exists in the DOM and is visible
        Header.getLogInButton().should('exist');
        Header.getLogInButton().should('be.visible');
        const currurl = cy.url();
        expect(currurl).to.not.equal('https://next-cypress-demo.vercel.app/');
    });
});
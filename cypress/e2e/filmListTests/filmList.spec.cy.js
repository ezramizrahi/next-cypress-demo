
import Common from '../../support/PageObjects/Common';
import FilmList from '../../support/PageObjects/FilmList';

describe('SOME TEST', () => {
    beforeEach(() => {
        // visit baseUrl before each test
        Common.visitBaseUrl();
    });

    it('should have specific content in a card', () => {
        // Check that the search button exists in the DOM and is visible
        FilmList.getFilmTitle().should('exist');
        FilmList.getFilmDescription().should('exist');
        FilmList.getFilmDirector().should('exist');
    });
});
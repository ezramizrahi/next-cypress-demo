class FilmList {
    getFilmTitle() {
        return cy.get('[data-cy="film-title"]');
    };

    getFilmDescription() {
        return cy.get('[data-cy="film-description"]');
    };

    getFilmDirector() {
        return cy.get('[data-cy="film-director"]');
    };
};

module.exports = new FilmList();
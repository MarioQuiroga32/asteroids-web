describe('Asteroid List', () => {
    beforeEach(() => {
        cy.visit('/asteroids');
    });

    it('should display a render at least one asteroid', () => {
        cy.get('[data-cy="asteroid-item"]').first().should('exist');
    });
});

describe('Asteroid Details', () => {
    beforeEach(() => {
        cy.visit('/asteroids/2000719'); // Replace "123" with a valid asteroid ID
    });

    it('should display the details of the selected asteroid', () => {
        cy.get('[data-cy="asteroid-detail-name"]').first().should('exist');
    });
});
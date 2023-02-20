describe('My First Test', () => {
  it('Visits the HomePage', () => {
    cy.visit('/')
    cy.request('POST', `https://jsonplaceholder.typicode.com/posts`)
    // test sort
    cy.get('[data-cy="Sort"]').click()
    cy.wait(2000);
    cy.get('[data-cy="Much"]').click()
    cy.wait(2000);
    cy.get('[data-cy="Sort"]').click()
    cy.get('[data-cy="Low"]').click()
    cy.wait(1000);
    // test search
    cy.get('[data-cy="searchInput"]').click().type('qui est')

    // detail post
    cy.contains('qui').click()
    cy.wait(5000);
    // back Home
    cy.get('[data-cy="back"]').click()
    cy.wait(3000);

    // test search empty list 
    cy.get('[data-cy="searchInput"]').click().type('sjdkldjl')
    cy.contains('notFound')
    // clear input value
    cy.get('[data-cy="searchInput"]').click().clear()
  })

})
describe('Phonebook app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3001')
  })

  it('front page can be opened', function() {
    cy.contains('Phonebook')
    cy.contains('Add a new contact')
  })

  it('new entry can be added to phonebook', function() {
    cy.get('#nameForm').type('Test Person')
    cy.get('#numberForm').type('12345678')
    cy.get('#submit').click()
    cy.contains('Test Person')
    cy.contains('12345678')
  })

  it('entry can be deleted', function() {
    cy.get('#nameForm').type('Test Person')
    cy.get('#numberForm').type('12345678')
    cy.get('#submit').click()

    cy.on('window:confirm', () => true)

    cy.get('#delete12345678').click()
    cy.contains('Deleted Test Person')
    cy.get('li').should('have.length',0)
  })
})

after(() => {
  cy.request('POST', 'http://localhost:3001/api/testing/reset')
})
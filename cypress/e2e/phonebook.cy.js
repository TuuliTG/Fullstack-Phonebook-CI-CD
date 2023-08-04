describe('Phonebook app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('Add a new contact')
  })

  it('new entry can be added to phonebook', function() {
    cy.visit('http://localhost:3001')
    cy.get('#nameForm').type('Test Person')
    cy.get('#numberForm').type('12345678')
    cy.get('#submit').click()
    cy.contains('Test Person')
    cy.contains('12345678')
  })
})

after(() => {
  cy.visit('http://localhost:3001')
  cy.get('#delete12345678').click()
})
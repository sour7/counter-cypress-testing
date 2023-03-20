

describe('Testing the counter app', () => {
  it('should load up the app', () => {
    cy.visit('http://localhost:5173')
  })

  it('should show initial count in UI',()=>{
    cy.intercept('GET', 'http://localhost:8080/counter', {fixture:'initialCounter'}).as('counterRequest')
    cy.visit('http://localhost:5173');
    cy.wait('@counterRequest')
    cy.get('[textid=counter]').should('be.visible')
    cy.get('[counterid=count]').should('have.text', 300)
  })

it('should inc count when user click on + button', ()=>{
  cy.intercept('GET', 'http://localhost:8080/counter', {fixture:'initialCounter'}).as('counterRequest')
  cy.intercept('POST', 'http://localhost:8080/counter', {"value":31}).as('postRequest')
  cy.visit('http://localhost:5173');
  cy.wait('@counterRequest')
  cy.get('[addbtn=addbtn]').should('be.visible')
  cy.get('[counterid=count]').should('have.text', 300)
  cy.get('[addbtn=addbtn]').click()
  cy.wait('@postRequest')
  cy.get('[counterid=count]').should('have.text', 301)
})


// instead of using fixture one can also put the data directly
it('should inc count when user click on - button', ()=>{
  // cy.intercept('GET', 'http://localhost:8080/counter', {"value":300}).as('counterRequest')
  cy.intercept('GET', 'http://localhost:8080/counter', {fixture:'initialCounter'}).as('counterRequest')
  
  cy.intercept('POST', 'http://localhost:8080/counter', {"value":299}).as('postRequest')
  cy.visit('http://localhost:5173');
  cy.wait('@counterRequest')
  cy.get('[descBtn=desc-btn]').should('be.visible')
  cy.get('[counterid=count]').should('have.text', 300)
  cy.get('[descBtn=desc-btn]').click()
  cy.wait('@postRequest')
  cy.get('[counterid=count]').should('have.text', 299)
})




})
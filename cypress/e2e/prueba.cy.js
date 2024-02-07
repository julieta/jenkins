describe('Test de prueba para Jenkins', () => {
  it('test que PASA', () => {
    cy.visit('https://example.cypress.io')
  })

  it('test que FALLA', () => {
    cy.visit('https://example.cypress.io')
    cy.get("h1").should("have.text", "Hola Mundo!")
  })

  it.skip('test que NO SE EJECUTA', () => {
    cy.visit('https://example.cypress.io')
  })
})
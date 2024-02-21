describe('Test de prueba para Jenkins', { tags: "@regresion" }, () => {
  it('test que PASA', { tags: ["@primero", "@pasara"] }, () => {
    cy.visit('https://example.cypress.io')
  })

  it('test que FALLA', { tags: "@fallara" }, () => {
    cy.visit('https://example.cypress.io')
    cy.get("h1").should("have.text", "Hola Mundo!")
  })

  it.skip('test que NO SE EJECUTA', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe("test google", () => {
  it("should show wormhole when search for einstein-rosen bridges", () => {
    cy.visit("https://google.com")

    cy.get('.gLFyf').type("Einstein-Rosen bridge{enter}")

    cy.get('[href="https://en.wikipedia.org/wiki/Wormhole"] > .LC20lb').should("be.visible")
  })
})
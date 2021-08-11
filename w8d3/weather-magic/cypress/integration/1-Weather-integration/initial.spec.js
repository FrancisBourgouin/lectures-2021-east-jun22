describe("Weather App Home / Basic Functionality", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Shows the title when first loading", () => {
    cy.get('.App > header h1').should("have.text", "Super Weather App !")
  })

  it("is possible to type in the input field and call the function", () => {

    cy.get(".CityForm input").should("have.length", 1)
    cy.get(".CityForm input").type("Montréal{enter}").should("have.value", "Montréal")
    cy.wait(2000)
    cy.get("section h1").should("have.text", "Montréal")
  })

  it("shows the loading animation while the data is being fetched", () => {
    cy.get(".CityForm input")
      .type("Toronto{enter}")
      .should("have.value", "Toronto")

    cy.get(".loading").should("be.visible")

    cy.wait(2000)

    cy.get("section h1").should("have.text", "Toronto")


  })

  it("adds a city button for every new city searched", () => {
    cy.get(".CityForm input")
      .type("Toronto")
      .should("have.value", "Toronto")
      .type("{enter}")

    // cy.get("section > button").last().should("have.text", "Toronto")
    cy.get(`button[data-testid="Toronto"]`).should("have.length", 1)

    cy.get(".CityForm input")
      .type("Montréal")
      .should("have.value", "Montréal")
      .type("{enter}")

    // cy.get("section > button").last().should("have.text", "Montréal")
    cy.get(`button[data-testid="Montréal"]`).should("have.length", 1)


    cy.get(".CityForm input")
      .type("Toronto")
      .should("have.value", "Toronto")
      .type("{enter}")

    // cy.get("section > button").last().should("have.text", "Toronto")
    cy.get(`button[data-testid="Toronto"]`).should("have.length", 1)

  })
  it("shows the weather information when a button is clicked", () => {
    cy.get(".CityForm input")
      .type("Montréal")
      .should("have.value", "Montréal")
      .type("{enter}")

    cy.get(".CityForm input")
      .type("Toronto")
      .should("have.value", "Toronto")
      .type("{enter}")


    cy.get(`button[data-testid="Montréal"]`).click()

    cy.get("section h1").should("have.text", "Montréal")
  })
})
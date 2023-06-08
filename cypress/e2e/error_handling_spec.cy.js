describe("Error Handling", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt", {
      fixture: "campsites.json",
    })
  });
  it("should have an error message when you go down the wrong path", () => {
    cy.visit("http://localhost:3000/whatever");
    cy.get("header").should("be.visible");
    cy.get(".error-message").first().contains("Sorry, you went down the wrong path!");
  });

  it("should have an error message when you enter an invalid campsite id in the url", () => {
    cy.visit("http://localhost:3000/campsite/whatever");
    cy.get("header").should("be.visible");
    cy.get(".error-message").contains("Sorry, we cannot locate this campsite...");
  });

  it("should display an error message for a bad fetch call", () => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt", {
      statusCode: 500, 
      body: { error: "Failed to fetch" }, 
    });
    cy.visit("http://localhost:3000");
    cy.get(".error-message").contains("Failed to fetch data... please try again!");
  })
});
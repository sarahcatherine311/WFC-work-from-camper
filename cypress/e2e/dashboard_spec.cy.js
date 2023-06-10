describe("Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt", {
      status: 200,
      fixture: "campsites.json",
    }).visit("http://localhost:3000/");
  });
  it("should have a header with a logo and title", () => {
    cy.get("header").should("is.visible")
    .get(".logo").should("is.visible")
    .get(".logo-title").should("is.visible")
  });
  it("should have a favorites button", () => {
    cy.get(".see-favorites-button").should("is.visible")
  });
  it("should have 4 campsite", () => {
    cy.get(".campsites-section").should("is.visible")
    .get(".campsite-card").should("have.length", 4)
  });
  it("cards should have a favorite button", () => {
    cy.get(".favorite-button").should("have.length", 4)
  });
  it("should be able to click on a campsite card and navigate to a new path", () => {
    cy.get(".campsite-card").first().click()
    .url().should("contain", "33AA5642-343E-425B-89E9-69A0918A8502")
  });
});


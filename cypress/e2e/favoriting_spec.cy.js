describe("Favoriting Feature", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt", {
      status: 200,
      fixture: "campsites.json",
    }).visit("http://localhost:3000");
  });
  it.skip("should be able to favorite cards", () => {
    cy.get(".favorite-button").first().click()
    .get(".favorite-button").last().click()
  });
  it.skip("should be able to view favorite cards", () => {
    cy.get(".favorite-button").first().click()
    .get(".favorite-button").last().click()
    .get(".see-favorites-button").click()
    .get(".campsite-card").should("have.length", 2)
  });

  it("should be able to unfavorite cards", () => {
    cy.get(".favorite-button").first().click()
    .get(".favorite-button").last().click()
    .get(".see-favorites-button").click()
    .get(".campsite-card").should("have.length", 2)
    .get(".favorite-button").last().click()
    .get(".campsite-card").should("have.length", 1)
  });

  it("should be able to navigate back to the home page", () => {
    cy.get(".see-favorites-button").click()
    .url().should("contain", "favorites")
    .get(".see-all-button").click()
    .get(".campsite-card").should("have.length", 4)
  });
});

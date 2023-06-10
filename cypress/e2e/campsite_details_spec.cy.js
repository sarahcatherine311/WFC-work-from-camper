describe("Campsite Details", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://developer.nps.gov/api/v1/campgrounds?limit=635&api_key=XsqUwqiAP2l38Gm2pbIdYs58KxBv2mguBnUusRNt", {
      status: 200,
      fixture: "campsites.json",
    }).visit("http://localhost:3000/campsite/33AA5642-343E-425B-89E9-69A0918A8502");
  });
  it("should have a header with a title", () => {
    cy.get("header").should("is.visible")
    .get(".logo").should("is.visible")
    .get(".logo-title").should("is.visible")
  });
  it("should have a campsite title", () => {
    cy.get(".campsite-title").should("is.visible").contains("Black Rock Campground");
  });
  it("should have images you can click though", () => {
    cy.get(".details-photo").should("is.visible")
    .get("[alt='A road leads past a sign that says \"Black Rock Canyon Campground\"']").should("is.visible")
    .get("#nextButton").click().get("[alt='A small parking lot with cars and a building.']").should("is.visible")
    .get("#prevButton").click().get("[alt='A road leads past a sign that says \"Black Rock Canyon Campground\"']").should("is.visible")
  });
});

/// <reference types='Cypress'/>
describe("JWT session", () => {
  it("is logged inthrough local storage", async () => {
    /*
    cy.LoginAPI("qavetedop@rungel.net", "Habibi69#").then(function () {
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          window.localStorage.setItem("token", Cypress.env("token"));
        },
      });
    });
    */
    cy.visit("https://rahulshettyacademy.com/client");
    cy.get("#userEmail").type("qavetedop@rungel.net");
    cy.get("#userPassword").type("Habibi69#");
    cy.get("#login").click();
    cy.get(".card-body button:nth-last-of-type(1)").click({ multiple: true });
    cy.get("button[routerlink='/dashboard/cart']").click();
    cy.get("li[class='totalRow'] button").click();
    cy.get("input[placeholder='Select Country']").type("Ind");
    cy.get("button[class*='ta-item list-group-item']").each(
      ($el, index, $list) => {
        if ($el.text() == " India") {
          cy.wrap($el).click();
        }
      }
    );
    cy.get("a[class*='btnn action__submit']").click();
    cy.wait(1000 * 5);
    cy.get("button[class*='btn btn-primary']").click({ multiple: true });
  });
});

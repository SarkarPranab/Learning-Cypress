describe("Handling Mouse Hover", () => {
  it("Should handle Mouse Hover", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    /* Mouse hover action */

    // cy.get(".mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    // cy.url().should("include", "top");

    /* Forceful click on hidden element*/
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});

describe("Handling Child Windows", () => {
  it("Should handle child windows", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    /* Removing attribute in cypress and jquery */
    cy.get("#opentab").invoke("removeAttr", "target").click();

    /*Cypress don't support cross domain we need to identify it.*/
    cy.origin("https://www.qaclickacademy.com/", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});

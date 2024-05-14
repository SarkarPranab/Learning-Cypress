//cypress - Spec file
describe("My Third Test", () => {
  it("My first test case.", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    /* 1. Checkboxes example */
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    // select multiple checkboxes
    // cy.get("input[type='checkbox']").check();
    cy.get("input[type='checkbox']").check(["option2", "option3"]);

    /* 2. Static dropdown */
    cy.get("select").select("option2").should("have.value", "option2");

    /* 3. Dynamic dropdown */
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");

    /* Show and hide textbox*/
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
    /* 4. Radio Group Button */
    cy.get("[value='radio2']").check().should("be.checked");
    /* 5. Alert Example */
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    /* 6. Alert triggering event */
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
  });
});

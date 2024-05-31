/// <reference types='Cypress'/>

// https://learning.oreilly.com/interactive-lab/working-with-azure/9781098132101/lab/
describe("Azure sql test", () => {
  it("Azure sql demo", () => {
    cy.sqlServer("select * from Persons").then((result) => {
      cy.log(result);
    });
  });
});

/// <reference types="Cypress" />

describe("My first test suite", function () {
  it("API Inetercept demo test case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        req.continue((res) => {
          expect(res.statuscode).to.equal(403);
        });
      }
    ).as("dummyurl");
    cy.get("button[routerlink*='library']").click();
    cy.wait("@dummyurl");

    // length of response array = rows of the table
  });
});

/// <reference types="Cypress" />

describe("My first test suite", function () {
  it("API Inetercept demo test case", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "BSG",
            aisle: "2302",
          },
        ],
      }
    ).as("bookretrivals");
    cy.get("button[routerlink*='library']").click();
    cy.wait("@bookretrivals").then(({ request, response }) => {
      cy.log(response.body.length);
      cy.get("tbody > tr").should("have.length", response.body.length);
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");

    // length of response array = rows of the table
  });
});

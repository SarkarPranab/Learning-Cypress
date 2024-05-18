import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ShopPage from "../../../pageObjects/ShopPage.js";

const homePage = new HomePage();
const shopPage = new ShopPage();

Given("I open Ecommerce Page", () => {
  cy.visit(Cypress.env("url") + "angularpractice/");
});

When("I add items to Cart", (dataTable) => {
  cy.log(
    "I add items to Cart : " +
      dataTable.rawTable[1][0] +
      "and quantity" +
      dataTable.rawTable[1][1]
  );
  console.log(
    "I add items to Cart : " +
      dataTable.rawTable[1][0] +
      "and quantity" +
      dataTable.rawTable[1][1]
  );
});

// And("Validate the total prices", () => {
//   cy.log("Validate the total prices");
// });

Then("select the country submit and verify Thankyou", () => {
  cy.log("select the country submit and verify Thankyou");
});

When("I fill the form details validate form behaviour", () => {
  homePage.getEditBox().type(globalThis.data.name);
  homePage.getGender().select(globalThis.data.gender);
});
Then("validate the forms behaviour", () => {
  homePage.getTwowayDataBinding().should("have.value", globalThis.data.name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.getEnterprenaure().should("be.disabled");
});
// And("select the shop page", () => {
//   shopPage.getShop().click();
// });

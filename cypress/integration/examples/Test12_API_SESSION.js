/// <reference types='Cypress'/>
"use strict";
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const neatCSV = require("neat-csv");
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
    var productList = [];
    cy.visit("https://rahulshettyacademy.com/client");
    cy.get("#userEmail").type("qavetedop@rungel.net");
    cy.get("#userPassword").type("Habibi69#");
    cy.get("#login").click();
    /*
    cy.get(".card > .card-body > h5 > b").each(($el, index, $index) => {
      cy.log($el.text());
      productList.push($el.text());
    });
    */
    cy.get(".card-body button:nth-last-of-type(1)").click({ multiple: true });
    cy.wait(1000 * 3);
    cy.get("button[routerlink='/dashboard/cart']").click();
    cy.get("div[class='cartSection'] h3").each(($el, index, $index) => {
      cy.log($el.text());
      productList.push($el.text());
    });
    cy.get("li[class='totalRow'] button").click();
    cy.wait(3 * 1000);
    cy.get("input[placeholder='Select Country']").type("Ind");
    cy.wait(3 * 1000);
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
    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_qavetedop.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);
      cy.log(productList.length);
      cy.log(csv.length);
      expect(csv.length).to.eql(productList.length);
      for (let i = 0; i < csv.length; i++) {
        // expect(csv[i]["Product Name"]).to.eql(productList[i]);
        expect(productList).contains(csv[i]["Product Name"]);
      }
    });

    // Excel validation

    //Browser(Engine) - JS code -> Client Side Enviroment (Front End) - ( Cypress only work in this level )
    //Node (Engine) - JS Code -> Backend Application application/Enviornment

    /*
    // Task - for files and database codes -> Config.js (ExcelToJson)
    cy.task("TASK_NAME")
    */
    //Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_qavetedop.xlsx"
    cy.task(
      "excelToJsonConverter",
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_qavetedop.xlsx"
    ).then((result) => {
      cy.log(result);
      cy.log(result.data[1].B);
      cy.log(result.data.length);
      for (let i = 1; i < result.data.length; i++) {
        expect(productList).contains(result.data[i].B);
      }
    });

    //for directly checking content in excel file
    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_qavetedop.xlsx"
    ).then((text) => {
      for (let i = 0; i < productList.length; i++) {
        expect(text).to.include(productList[i]);
      }
    });
  });
});

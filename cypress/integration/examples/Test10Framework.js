import HomePage from "../pageObjects/HomePage";
import ShopPage from "../pageObjects/ShopPage";
import ProductPage from "../pageObjects/ProductPage";
import CheckoutPage from "../pageObjects/CheckoutPage";
describe("Test framework example", () => {
  /*Implementing hooks - Before */
  before(function () {
    cy.fixture("example").then((data) => {
      //   cy.log("Loaded data from fixture:", data);
      globalThis.data = data;
    });
  });
  it("Test framework demo testcase", () => {
    const homePage = new HomePage();
    const shopPage = new ShopPage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();

    cy.log("Loaded data from fixture downstream :", globalThis.data);
    cy.visit(Cypress.env("url") + "angularpractice/");
    homePage.getEditBox().type(globalThis.data.name);
    homePage.getGender().select(globalThis.data.gender);
    homePage.getTwowayDataBinding().should("have.value", globalThis.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEnterprenaure().should("be.disabled");
    // Pausing test execution
    // cy.pause();
    shopPage.getShop().click();
    globalThis.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    productPage.getCheckout().click();
    /*Validate sum in checkout page*/
    var sum = 0;
    productPage
      .getProductProces()
      .each(($el, index, $list) => {
        sum = Number(sum) + Number($el.text().trim().split(" ")[1]);
        cy.log($el.text().trim().split(" ")[1]);
      })
      .then(() => {
        cy.log(sum);
      });
    productPage.getFinalSum().then((element) => {
      const amount = element.text().trim().split(" ")[1];
      cy.log(amount);
      expect(Number(amount)).to.eql(sum);
    });
    /*Default Timeout spec level*/
    Cypress.config("defaultCommandTimeout", 8000);
    productPage.getProductCheckOut().click();
    checkoutPage.getCountrySelection().type(globalThis.data.country);
    checkoutPage.selectCountry().click();
    checkoutPage.getCheckoutCheckbox().click({ force: true });
    checkoutPage.getAlertMessage().then((element) => {
      const alertText = element.text();
      expect(alertText.includes("Success")).to.be.true;
    });
    /*Running spec file from command line
    npx cypress run --spec "File Path" --headed --chrome url="link"
    - if global remove npx url 
    - for env path passing on run time
    - headed for make it run with gui as default cli run is headless
    - chrome to tell which browser to use
    */
  });
});

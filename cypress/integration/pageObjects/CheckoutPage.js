class CheckoutPage {
  getCountrySelection() {
    return cy.get("#country");
  }
  selectCountry() {
    return cy.get(".suggestions > ul > li > a");
  }
  getCheckoutCheckbox() {
    return cy.get("input[type='submit']");
  }
  getAlertMessage() {
    return cy.get(".alert");
  }
}
export default CheckoutPage;

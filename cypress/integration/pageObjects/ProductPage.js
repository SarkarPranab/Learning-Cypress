class ProductPage {
  getCheckout() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
  getProductCheckOut() {
    return cy.get(":nth-child(4) > :nth-child(5) > .btn");
  }

  getProductProces() {
    return cy.get("tr td:nth-child(4) strong");
  }
  getFinalSum() {
    return cy.get("h3 > strong");
  }
}
export default ProductPage;

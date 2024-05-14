class ShopPage {
  getShop() {
    return cy.get(":nth-child(2) > .nav-link");
  }

  getProductNames() {
    return cy.get("h4.card-title");
  }

  getAddToCartButtons() {
    return cy.get("button.btn.btn-info");
  }
}
export default ShopPage;

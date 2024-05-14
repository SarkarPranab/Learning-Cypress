class HomePage {
  getEditBox() {
    return cy.get(":nth-child(1) > .form-control");
  }

  getTwowayDataBinding() {
    return cy.get(":nth-child(4) > .ng-pristine");
  }

  getGender() {
    return cy.get("select");
  }

  getEnterprenaure() {
    return cy.get("#inlineRadio3");
  }
}
export default HomePage;

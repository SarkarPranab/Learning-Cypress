beforeEach(() => {
  cy.fixture("example").then((data) => {
    //   cy.log("Loaded data from fixture:", data);
    globalThis.data = data;
  });
});

describe("Api test suite", () => {
  it("Api demo testcase", () => {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "Test automation framework by 69s7",
      isbn: "bigass",
      aisel: "69s7",
      author: "Pr King",
    }).then((response) => {
      //   expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});

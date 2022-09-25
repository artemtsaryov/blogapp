describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset");
    const user = {
      name: "Artem Tsarev",
      username: "artem",
      password: "tsarev",
    };
    cy.request("POST", "http://localhost:3003/api/users/", user);
    cy.visit("http://localhost:3003");
  });

  it("Login form is shown", function () {
    cy.contains("log in to blogs app");
    cy.contains("username");
    cy.contains("password");
    cy.contains("login");
  });

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("input[type=text]").type("artem");
      cy.get("input[type=password]").type("tsarev");
      cy.get("button[type=submit]").click();

      cy.contains("Artem Tsarev logged-in");
    });
  });
});

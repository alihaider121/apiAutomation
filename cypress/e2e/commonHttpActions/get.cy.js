it("GET API testing Using Cypress API Plugin", () => {
  cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
    expect(response.status).to.eq(200);
  });
});

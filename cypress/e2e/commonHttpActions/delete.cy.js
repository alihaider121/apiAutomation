it("DELETE API testing Using Cypress API Plugin", () => {
  cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
    expect(response.status).to.eq(204);
  });
});

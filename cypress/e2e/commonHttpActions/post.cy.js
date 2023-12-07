it("POST API testing Using Cypress API Plugin", () => {
  cy.request("POST", "https://reqres.in/api/users", {
    name: "morpheus",
    job: "leader",
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

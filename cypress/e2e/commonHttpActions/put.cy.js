it("PUT API testing Using Flip Plugin", () => {
  cy.request("PUT", "https://reqres.in/api/users/2", {
    name: "QAAutomationLabs",
    job: "QA Automation Engg",
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

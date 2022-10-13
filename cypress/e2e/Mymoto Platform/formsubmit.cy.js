describe("MyMoto App", () => {
  it("FormsSubmission", () => {
    cy.visit("https://mymotolr.com/auth/signin");
    cy.wait(2000)
    cy.get(".registerHereB").click();
    cy.contains("Email").type("yes@gmail.com");
    cy.contains("Full Name").type("James Junior");
    cy.get("#formContactPhoneNumber").type("0201929192");
    cy.get('#exampleForm.ControlTextarea1').type('By proceeding, you agree to receive calls, and SMS messages from NAFOMTAL and its affiliates to the number provided.')
    cy.contains("Send").click();
  });
});

describe("MyMoto App", () => {
  it("FormsSubmission", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.wait(2000);
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.wait(2000);
    cy.reload()
    cy.wait(2000);
    cy.get("#email").type("roni_cost@example.com");
    cy.wait(2000);
    cy.get("#pass").type("roni_cost3@example.com");
    cy.wait(2000);
    cy.get(".action.login.primary").click();
    cy.wait(2000);
    cy.get("#email").type("roni_cost@example.com");
    cy.wait(2000);
    cy.get("#pass").type("roni_cost3@example.com");
    cy.wait(10000);
    //enter the recaptcha code on the site manually and wait for it to click
    cy.get(".action.login.primary").click();
  });
});

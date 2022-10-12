Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe("MyMoto App", () => {
  it("AdecoreTuma", () => {
    cy.visit("https://mymotolr.com/auth/signin");
    cy.wait(3000)
    cy.get("#formMobile").type("0556780200");
    cy.contains('Sign in').click()
    //the 20sec wait to is continue and click on recapcha manually 
    cy.wait(30000)
    //input the otp received manually 
    cy.get('.custom-button').click()
  });
});
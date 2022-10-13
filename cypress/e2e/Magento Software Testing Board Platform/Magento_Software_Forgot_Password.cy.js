describe("MyMoto App", () => {
    it("FormsSubmission", () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.wait(2000);
        cy.get(".panel > .header > .authorization-link > a").click();
        cy.wait(2000);
        cy.get('.action.remind').click()
        cy.wait(2000);
        cy.get('#email_address').type('yesin@eay.jp')
        cy.wait(10000);
        //over here type the reload captcha manually 
       // cy.get('.input-text.required-entry').type()
        //over here type the reload captcha manually 
        //cy.wait(2000);
        cy.get('.action.submit.primary').click()
    })
})
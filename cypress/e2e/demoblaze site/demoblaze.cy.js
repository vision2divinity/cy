describe("demoblaze", () => {
    it("fulltest", () => {

        cy.visit('https://www.demoblaze.com/')
           cy.get('#login2').click()
           cy.get('#loginusername').type('earl.gnash')
           cy.get('#loginpassword').type('demoblaze')
           //cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
           cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


    })
})
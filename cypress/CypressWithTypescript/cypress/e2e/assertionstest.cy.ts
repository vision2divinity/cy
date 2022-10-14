describe('various assertios', ()=>{
it('assertions test', ()=>{
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    //there are two types of assertions in cypress, which are 'implicit and explicit
    
    //below are the various implicit assertions examples in cypress which are ('should' & 'and')
    //these are built-in assertion commands
    cy.get('#query-btn').should('contain', 'Button')
    //this is an example oof should-contain assertion commnands

    cy.get('#query-btn').should('have.class', 'query-btn')
    //this is an example of should-have assertion commands

    cy.get('#query-btn').should('be.visible')
    //this is an example should-be assertion commands

    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')
    //this is an example should-equal assertion commands

    cy.get('#query-btn').should('contain','Button').and('have.class','query-btn')
    //this is an example of and(chained assertion) assertion commands. it is used to combine two or more implicit commands

    //below are the various Explicit assertions examples in cypress which are ('expect and assert)
    //dont forget these are not built-in assertion commands

    //Expect Assertions
    expect(true).to.be.true
    //this is to  check if the expected name or keyword matches or is equal to name. 
    let name='Button'; expect(name).to.be.equal('Button') //this will fail cos Button isnt same as button

    //Assert command
    assert.equal(4,4, ' not equal')
    
})
})
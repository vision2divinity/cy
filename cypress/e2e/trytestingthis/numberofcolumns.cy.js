describe('try and find total number of columns',()=>{ 

it('code to find the total number of columns or rows',()=>{

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('.main > :nth-child(9)').find('tr').then((columns)=>{
        cy.log(columns.length);
    })
    cy.get('[data-layer="Content"]').click()

})
})
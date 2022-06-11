describe('My First Test', () => {
    before(() => {
        cy.visit('http://localhost:4000');
        cy.waitForReact(); // 1000 is the timeout in milliseconds, you can provide as per AUT
      });    


    it('Visits the main website', () => {
     
    })
  })
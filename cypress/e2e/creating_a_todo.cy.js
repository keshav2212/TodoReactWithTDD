describe('Creating a todo', () => {
    it('Displays the todo in the list', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[id="todotext"]')
        .type('First Todo');
  
      cy.get('[id="addbutton"]')
        .click();

      cy.get('[id="list_item_0"]')
      .should('contain','First Todo');

      cy.get('[id="removebutton_0"]')
      .click()

      cy.get('[id="todoelements"]').should('not.contain','First Todo');

    });
  });
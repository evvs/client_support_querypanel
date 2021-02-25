describe('My First Test', () => {
  it('Make an assertion', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('[data-testid=signin-login-field]').click();
  });
});

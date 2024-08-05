describe('Login Flow', () => {
    before(() => {
      cy.visit('http://yourwebsite.com/login');  // Replace with your actual login URL
    });
  
    it('should allow a user to log in successfully', () => {
      // Fill out the login form
      cy.get('#login-email').type('testuser@example.com');
      cy.get('#login-password').type('TestPassword123');
      cy.get('#login-btn').click();
  
      // Verify successful login
      cy.get('#user-profile').should('be.visible');
    });
  });
  
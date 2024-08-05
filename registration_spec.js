describe('Registration Flow', () => {
    before(() => {
      cy.visit('http://yourwebsite.com/registration');  // Replace with your actual registration URL
    });
  
    it('should allow a user to register successfully', () => {
      // Fill out the registration form
      cy.get('#register-email').type('testuser@example.com');
      cy.get('#register-password').type('TestPassword123');
      cy.get('#register-confirm-password').type('TestPassword123');
      cy.get('#register-btn').click();
  
      // Verify successful registration
      cy.get('#registration-success-message').should('contain.text', 'Registration successful');
    });
  });
  
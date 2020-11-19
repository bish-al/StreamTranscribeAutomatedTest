
module.exports = {


	enterLoginDetails: function(email, password) {
		cy.get('#inputEmail')
			.type(email)
			.should('have.value', email);

		cy.get('#inputPassword')
			.type(password);
	},


	clickSignIn: function(){
		cy.get('.btn')
			.should('contain', 'Sign in')
			.click(); 
	},



	
	visitLoginPage: function() {

		cy.visit('https://staging.admin.transcribe.streamamg.com');
		this.confirmLoginPage();

	},



	confirmLoginPage: function()
	{
		cy.contains('Sign In')
		cy.contains('Email address')
		cy.contains('Password')
	},




	tryUnauthorisedLogin: function() {
		
		this.enterLoginDetails('invalidEmail', 'invalidPassword');

		this.clickSignIn();
		
		cy.contains('Incorrect email or password!');

	},



	tryAuthorisedLogin: function() {

		this.enterLoginDetails(Cypress.env('adminLoginEmail'), Cypress.env('adminLoginPassword'));

		this.clickSignIn();

		cy.get('app-dashboard-navigation > .navbar')
			.should('contain', 'Partners')
			.should('contain', 'Users')
			.should('contain', 'Billings')
			.should('contain', 'Settings')
		
		cy.get('body')
			.should('not.contain', 'Invalid email or password!');


		}

}
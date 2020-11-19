
module.exports = {


	visitUsersPage: function()
	{
		cy.contains('Users').click();
		this.confirmUsersPage();
	},


	confirmUsersPage: function()
	{
		cy.contains('Name');
		cy.contains('Email');
		cy.contains('Permissions');
		cy.contains('Action');
	},
}
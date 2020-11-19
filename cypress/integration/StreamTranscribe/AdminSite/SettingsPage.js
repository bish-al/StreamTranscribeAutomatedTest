
module.exports = {


	visitSettingsPage: function()
	{
		cy.contains('Settings').click();
		this.confirmSettingsPage();
	},


	confirmSettingsPage: function()
	{
		cy.contains('ID');
		cy.contains('Name');
		cy.contains('Languages');
		cy.contains('Edit');
		cy.contains('Delete');
		cy.contains('Add Group');
		cy.contains('Language Groups');
	},
}

module.exports = {


	visitAdminSitePartnersPage: function()
	{
		this.confirmPartnersPage();
	},


	confirmPartnersPage: function()
	{
		cy.contains('Partner ID');
		cy.contains('Partner Name');
		cy.contains('Default Language');
		cy.contains('Default Currency');
		cy.contains('Transcription Cost per Minute');
		cy.contains('Language Group');
		cy.contains('Status');
		cy.contains('Action');
	},
}

module.exports = {


	visitBillingsPage: function()
	{
		cy.contains('Billings').click();
		this.confirmBillingsPage();
	},


	confirmBillingsPage: function()
	{
		cy.contains('Job ID');
		cy.contains('Partner ID');
		cy.contains('Partner Name');
		cy.contains('Type');
		cy.contains('Language');
		cy.contains('Entry ID');
		cy.contains('Duration');
		cy.contains('Created On');
		cy.contains('Status');
		cy.contains('CPM');
		cy.contains('Job Cost');
	},
}
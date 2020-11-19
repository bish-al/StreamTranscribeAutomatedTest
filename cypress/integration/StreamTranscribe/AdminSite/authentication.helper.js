module.exports = {





logout: function(){

	cy.get('.nav-item > .btn') //logout button
		.should('contain', 'Sign out')
		.click();

	cy.get('body')
		.should('not.contain', 'Sign out');

},


}
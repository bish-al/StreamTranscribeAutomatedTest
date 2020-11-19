module.exports = {

	

	getText: function(selector){


		cy.get(selector).should(($element) => {
			let text = 'asdfasdf333';

			cy.log(text);

			return text;

		});

	}


}
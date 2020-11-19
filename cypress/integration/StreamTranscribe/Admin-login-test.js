/// <reference types="cypress" />


let AdminSite = require('./AdminSite/login-page.js');

let Authentication = require('./AdminSite/authentication.helper.js');


context('Admin Site Test', () => {
  

  // beforeEach(() => {
  //   cy.visit('https://example.cypress.io')
  //   cy.get('.navbar-nav').contains('Commands').click()
  //   cy.get('.dropdown-menu').contains('Navigation').click()
  // })

  it('Admin site is visitable', () => {

    AdminSite.visitLoginPage();

  });



  it('Unauthorised users can not login', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryUnauthorisedLogin();

  });



  it('Authorised users can login', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryAuthorisedLogin();

  });



  it('Authorised users can logout', () => {

    Authentication.logout();
    AdminSite.confirmLoginPage();


  });

    





})

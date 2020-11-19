/// <reference types="cypress" />


let AdminSite = require('./AdminSite/login-page.js');
let AdminUsersPage = require('./AdminSite/UsersPage.js');

// let Authentication = require('./AdminSite/authentication.helper.js');


context('Admin Site Users Page Test', () => {

  it('Admin site User Page is accessible', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryAuthorisedLogin();
    AdminUsersPage.visitUsersPage();

  });




})

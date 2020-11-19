/// <reference types="cypress" />


let AdminSite = require('./AdminSite/login-page.js');
let AdminPartnersPage = require('./AdminSite/Partners-page.js');

let Authentication = require('./AdminSite/authentication.helper.js');


context('Admin Site Partners Page Test', () => {

  it('Admin site Partner Page is accessable', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryAuthorisedLogin();
    AdminPartnersPage.visitAdminSitePartnersPage();

  });




})

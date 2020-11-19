/// <reference types="cypress" />


let AdminSite = require('./AdminSite/login-page.js');
let AdminSettingsPage = require('./AdminSite/SettingsPage.js');

// let Authentication = require('./AdminSite/authentication.helper.js');


context('Admin -> Settings Page Test', () => {

  it('Setting Page is accessible', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryAuthorisedLogin();
    
    AdminSettingsPage.visitSettingsPage();

  });




})

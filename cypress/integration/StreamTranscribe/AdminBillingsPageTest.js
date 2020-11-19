/// <reference types="cypress" />


let AdminSite = require('./AdminSite/login-page.js');
let AdminBillingsPage = require('./AdminSite/BillingsPage.js');

// let Authentication = require('./AdminSite/authentication.helper.js');


context('Admin -> Billings Page Test', () => {

  it('Billing Page is accessible', () => {

    AdminSite.visitLoginPage();
    AdminSite.tryAuthorisedLogin();
    
    AdminBillingsPage.visitBillingsPage();

  });




})

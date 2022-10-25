/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import { adminlogin } from "../../PageObjects/login.cy";

const admin=new adminlogin()

describe("MyMoto App", () => {
  it("Admin tries to login to the webapp", () => {
   
    admin.navigate("https://mymotolr.com/auth/signin");
    admin.flag('.iti__selected-flag')
    admin.gh('#iti-1__item-gh')
    admin.formMobile('#formMobile')
    admin.Signin('type=["submit"]')
    admin.custom('.custom-button')
  });
});
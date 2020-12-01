/// <reference types="cypress" />

import { HomePage } from "../page_objects/home_page";
import { SignUpPage } from "../page_objects/sign_up_page";
import { EnterprisePlanPage } from "../page_objects/enterprise_plan_page";

const homePage = new HomePage();
const signUpPage = new SignUpPage();
const enterprisePlanPage = new EnterprisePlanPage();

describe("trial enterprise", () => {
  it("trial enterprise cloud", () => {
    cy.get(homePage.startFreeTrialButton).click();
    cy.get(enterprisePlanPage.enterpriseCloudButton).click();

    // TODO rafector into page method
    cy.currentPageShouldBe(signUpPage, "fuzzy");
    cy.enterUsername(signUpPage.usernameField);
    cy.enterEmail(signUpPage.userEmailField);
    cy.enterPassword(signUpPage.userPasswordField);
    cy.get(signUpPage.sendMeOccasionalProductUpdatesCheckbox).click();
    cy.get(signUpPage.verifyYourAccountFrame).should("be.visible");

    cy.go("back");

    cy.get(enterprisePlanPage.enterpriseServerButton).click();
  });
});

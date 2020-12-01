/// <reference types="cypress" />

import { verifyYourAccountFrame } from "../support/globals";

import { HomePage } from "../page_objects/home_page";
import { SignUpPage } from "../page_objects/sign_up_page";
import { EnterprisePlanPage } from "../page_objects/enterprise_plan_page";
import { TrialPage } from "../page_objects/trial_page";

const homePage = new HomePage();
const signUpPage = new SignUpPage();
const enterprisePlanPage = new EnterprisePlanPage();
const trialPage = new TrialPage();

describe("trial enterprise", () => {
  it("trial enterprise cloud and server", () => {
    cy.get(homePage.startFreeTrialButton).click();
    cy.get(enterprisePlanPage.enterpriseCloudButton).click();

    // TODO rafector into page or 'commands' single method
    cy.currentPageShouldBe(signUpPage, "fuzzy");
    cy.enterName(signUpPage.usernameField);
    cy.enterEmail(signUpPage.userEmailField);
    cy.enterPassword(signUpPage.userPasswordField);
    cy.get(signUpPage.sendMeOccasionalProductUpdatesCheckbox).click();
    cy.get(verifyYourAccountFrame).should("be.visible");

    cy.go("back");

    cy.get(enterprisePlanPage.enterpriseServerButton).click();
    cy.currentPageShouldBe(trialPage, "fuzzy");

    cy.enterName(trialPage.usernameField);
    cy.enterName(trialPage.companyNameField);
    cy.enterWorkEmail(trialPage.workEmailField);
    cy.enterPhone(trialPage.phoneField);

    cy.get(trialPage.chooseYourInstallationTypeRadioButtonsAzure).click();
    cy.get(trialPage.doYouHaveAnyOtherQuestionsRadioButtonsYes).click();
    cy.get(trialPage.iHerebyAcceptTheTermsCheckbox).click();

    cy.get(verifyYourAccountFrame).should("be.visible");
  });
});

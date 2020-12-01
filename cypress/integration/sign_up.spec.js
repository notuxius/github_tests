/// <reference types="cypress" />

import { verifyYourAccountFrame } from "../support/globals";

import { Header } from "../page_objects/header";
import { HomePage } from "../page_objects/home_page";
import { PricingPage } from "../page_objects/pricing_page";
import { SignUpPage } from "../page_objects/sign_up_page";

const header = new Header();
const homePage = new HomePage();
const pricingPage = new PricingPage();
const signUpPage = new SignUpPage();

describe("user sign up with random username, email and password", () => {
  it("user pre-sign up from homepage top sign up form", () => {
    cy.enterName(homePage.topUsernameField);
    cy.enterEmail(homePage.topUserEmailField);
    cy.enterPassword(homePage.topUserPasswordField);
    cy.submit(homePage.topSubmitButton);

    cy.currentPageShouldBe(signUpPage);
    cy.get(verifyYourAccountFrame).should("be.visible");
  });

  it("user pre-sign up from homepage bottom sign up form", () => {
    cy.enterName(homePage.bottomUsernameField);
    cy.enterEmail(homePage.bottomUserEmailField);
    cy.enterPassword(homePage.bottomUserPasswordField);
    cy.submit(homePage.bottomSubmitButton);

    cy.currentPageShouldBe(signUpPage);
    cy.get(verifyYourAccountFrame).should("be.visible");
  });

  it("user pre-sign up from 'pricing' header dropdown -> 'plans' dropdown menu -> top 'join for free' button", () => {
    cy.hoverHeaderDropdown(header.pricingDropdown);
    cy.get(header.pricingDropdownMenuPlansItem).click();
    cy.get(pricingPage.topJoinForFreeButton).click();

    // TODO possibly refactor info cy.location without 'fuzzy'
    cy.currentPageShouldBe(signUpPage, "fuzzy");
    cy.enterName(signUpPage.usernameField);
    cy.enterEmail(signUpPage.userEmailField);
    cy.enterPassword(signUpPage.userPasswordField);
    cy.get(signUpPage.sendMeOccasionalProductUpdatesCheckbox).click();
    cy.get(verifyYourAccountFrame).should("be.visible");
  });
});

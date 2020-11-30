/// <reference types="cypress" />

import { JoinPage } from "../page_objects/join_page";

const joinPage = new JoinPage();

export class HomePage {
  constructor() {
    this.topUsernameField = "#user\\[login\\]";
    this.topUserEmailField = "#user\\[email\\]";
    this.topUserPasswordField = "#user\\[password\\]";
    this.topSubmitButton =
      ".home-hero-signup > " + Cypress.config().baseSubmitButton;

    this.bottomUsernameField = "#user\\[login\\]-footer";
    this.bottomUserEmailField = "#user\\[email\\]-footer";
    this.bottomUserPasswordField = "#user\\[password\\]-footer";
    this.bottomSubmitButton =
      ".home-hero-signup div " + Cypress.config().baseSubmitButton;

    this.pageUrl = Cypress.config().baseUrl;
  }

  preSignUpUserWithFormAtThe(part) {
    if (part == "top") {
      cy.enterUsername(this.topUsernameField);
      cy.enterEmail(this.topUserEmailField);
      cy.enterPassword(this.topUserPasswordField);
      cy.submit(this.topSubmitButton);
    } else if (part == "bottom") {
      cy.enterUsername(this.bottomUsernameField);
      cy.enterEmail(this.bottomUserEmailField);
      cy.enterPassword(this.bottomUserPasswordField);
      cy.submit(this.bottomSubmitButton);
    }

    cy.verifyUserIsOn("JoinPage");
    cy.get(joinPage.verifyYourAccountFrame).should("be.visible");
  }
}

/// <reference types="cypress" />

import { signedUpUserEmail } from "../support/globals";

import { Header } from "../page_objects/header";

const header = new Header();

export class SignInPage {
  constructor() {
    this.userEmailField = "#login_field";
    this.userPasswordField = Cypress.config().basePasswordField;
    this.submitButton = Cypress.config().baseSubmitButton;

    this.forgotPasswordLink = 'a[href="/password_reset"]';

    this.pageUrl = Cypress.config().baseUrl + Cypress.config().signInUrlPart;
  }

  signInUser() {
    cy.get(header.signInLink).click();
    cy.verifyUserIsOn("SignInPage");
    cy.enterEmail(this.userEmailField, signedUpUserEmail);
    cy.enterPassword(this.userPasswordField, Cypress.env.signedUpUserPassword);
    cy.submit(this.submitButton);
  }
}

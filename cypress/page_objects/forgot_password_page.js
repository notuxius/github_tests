/// <reference types="cypress" />

import { randomUsername, signedUpUserEmail } from "../support/globals";

import { SignInPage } from "../page_objects/sign_in_page";
import { Header } from "../page_objects/header";

const signInPage = new SignInPage();
const header = new Header();

export class ForgotPasswordPage {
  constructor() {
    this.userEmailField = "#email_field";
    this.submitButton = Cypress.config().baseSubmitButton;

    this.checkYourEmailSuccessParagraph = "#js-pjax-container p";
    this.checkYourEmailFailurePopup = ".flash-error div";
    this.checkYourEmailSuccessParagraphText =
      "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.";
    this.checkYourEmailFailurePopupText =
      "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications";

    this.pageUrl =
      Cypress.config().baseUrl + "password_reset";
  }

  sendForgotPasswordMail(email = "defaultEmail") {
    let userEmail = signedUpUserEmail;
    let messageElement = this.checkYourEmailSuccessParagraph;
    let messageText = this.checkYourEmailSuccessParagraphText;

    if (email != "defaultEmail") {
      if (email == "noEmail") {
        userEmail = "";
      } else if (email == "incorrectEmail") {
        userEmail = randomUsername;
      }
      messageElement = this.checkYourEmailFailurePopup;
      messageText = this.checkYourEmailFailurePopupText;
    }

    cy.get(header.signInLink).click();
    cy.get(signInPage.forgotPasswordLink).click();
    cy.currentPageShouldBe(this);
    if (userEmail) {
      cy.enterEmail(this.userEmailField, userEmail);
    }
    cy.submit(this.submitButton);
    cy.get(messageElement).should("have.textTrimmed", messageText);
  }
}

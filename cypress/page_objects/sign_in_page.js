/// <reference types="cypress" />

import { submitButton } from "../support/globals";

export class SignInPage {
  constructor() {
    this.userEmailField = "#login_field";
    this.userPasswordField = "#password";
    this.submitButton = submitButton;

    this.forgotPasswordLink = 'a[href="/password_reset"]';

    this.pageUrl = Cypress.config().baseUrl + "login";
  }
}

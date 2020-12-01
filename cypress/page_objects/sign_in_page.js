/// <reference types="cypress" />

export class SignInPage {
  constructor() {
    this.userEmailField = "#login_field";
    this.userPasswordField = "#password";
    this.submitButton = Cypress.config().baseSubmitButton;

    this.forgotPasswordLink = 'a[href="/password_reset"]';

    this.pageUrl = Cypress.config().baseUrl + "login";
  }
}

export class SignInPage {
  constructor() {
    this.userEmailField = "#login_field";
    this.userPasswordField = Cypress.config().basePasswordField;
    this.submitButton = Cypress.config().baseSubmitButton;

    this.forgotPasswordLink = 'a[href="/password_reset"]';

    this.pageUrl = Cypress.config().baseUrl + Cypress.config().signInUrlPart;
  }
}

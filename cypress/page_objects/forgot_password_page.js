export class ForgotPasswordPage {
  constructor() {
    this.userEmailField = "#email_field";
    this.submitButton = Cypress.config().baseSubmitButton;

    this.checkYourEmailSuccessTextElement = "#js-pjax-container p";
    this.checkYourEmailFailureTextElement = ".flash-error div";
    this.checkYourEmailSuccessText =
      "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.";
    this.checkYourEmailFailureText =
      "That address is not a verified primary email or is not associated with a personal user account. Organization billing emails are only for notifications";

    this.pageUrl =
      Cypress.config().baseUrl + Cypress.config().forgotPasswordUrlPart;
  }
}

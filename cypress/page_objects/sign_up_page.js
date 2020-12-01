/// <reference types="cypress" />

export class SignUpPage {
  constructor() {
    this.usernameField = "input[name='user\\[login\\]']";
    this.userEmailField = "input[name='user\\[email\\]']";
    this.userPasswordField = "input[name='user\\[password\\]']";
    this.sendMeOccasionalProductUpdatesCheckbox = ".form-checkbox";

    this.pageUrl = Cypress.config().baseUrl + "join";
  }
}

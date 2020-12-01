/// <reference types="cypress" />

export class SignOutPage {
  constructor() {
    this.submitButton = "[type=submit][value='Sign out']";

    this.pageUrl = Cypress.config().baseUrl + "logout";
  }
}

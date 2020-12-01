/// <reference types="cypress" />

export class SignOutPage {
  constructor() {
    this.pageUrl = Cypress.config().baseUrl + "logout";
    this.submitButton = "[type=submit][value='Sign out']";
  }
}

/// <reference types="cypress" />

export class TrialPage {
  constructor() {
    this.pageUrl = Cypress.config().baseUrl + "trial?";
  }
}

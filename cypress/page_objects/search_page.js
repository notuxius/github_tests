/// <reference types="cypress" />

export class SearchPage {
  constructor() {
    this.pageUrl = Cypress.config().baseUrl + "search?q=";
  }
}

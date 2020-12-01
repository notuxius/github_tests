/// <reference types="cypress" />

export class ExplorePage {
  constructor() {
    this.pageUrl = Cypress.config().baseUrl + "explore";
  }
}

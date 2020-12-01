/// <reference types="cypress" />

export class CarrersPage {
  constructor() {
    this.openPositionsLink = "[href='#positions']";
    this.openPositionsTitlesHeadings = "#positions ~ div .js-details-target h3";

    this.pageUrl = Cypress.config().baseUrl + "about/careers";
  }
}

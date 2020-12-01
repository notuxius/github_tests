/// <reference types="cypress" />

export class PricingPage {
  constructor() {
    this.topJoinForFreeButton =
      ".js-pricing-plans-container [data-ga-click*='Join for free']";

    this.pageUrl = Cypress.config().baseUrl + "pricing";
  }
}

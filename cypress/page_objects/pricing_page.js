/// <reference types="cypress" />

export class PricingPage {
  constructor() {
    this.topJoinForFreeButton =
      ".bg-white.position-relative [data-ga-click*='Join for free']";

    this.pageUrl = Cypress.config().baseUrl + "pricing";
  }
}

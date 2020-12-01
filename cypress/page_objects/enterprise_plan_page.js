/// <reference types="cypress" />

export class EnterprisePlanPage {
  constructor() {
    this.enterpriseCloudButton =
      "[href*='business_plus'] .height-full.signup-plan-card";
    this.enterpriseServerButton =
      "[href*='pricing-card-enterprise'] .height-full.signup-plan-card";

    this.pageUrl = Cypress.config().baseUrl + "organizations/enterprise_plan";
  }
}

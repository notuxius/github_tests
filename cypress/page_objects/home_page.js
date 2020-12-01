/// <reference types="cypress" />

import { submitButton } from "../support/globals";

export class HomePage {
  constructor() {
    this.topUsernameField = "#user\\[login\\]";
    this.topUserEmailField = "#user\\[email\\]";
    this.topUserPasswordField = "#user\\[password\\]";
    this.topSubmitButton = ".home-hero-signup > " + submitButton;

    this.bottomUsernameField = "#user\\[login\\]-footer";
    this.bottomUserEmailField = "#user\\[email\\]-footer";
    this.bottomUserPasswordField = "#user\\[password\\]-footer";
    this.bottomSubmitButton = ".home-hero-signup div " + submitButton;

    this.startFreeTrialButton = "[href^='/organizations']";

    this.pageUrl = Cypress.config().baseUrl;
  }
}

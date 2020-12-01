/// <reference types="cypress" />

import { SignUpPage } from "../page_objects/sign_up_page";

const signUpPage = new SignUpPage();
/// <reference types="cypress" />

// TODO
export class HomePage {
  constructor() {
    this.topUsernameField = "#user\\[login\\]";
    this.topUserEmailField = "#user\\[email\\]";
    this.topUserPasswordField = "#user\\[password\\]";
    this.topSubmitButton =
      ".home-hero-signup > " + Cypress.config().baseSubmitButton;

    this.bottomUsernameField = "#user\\[login\\]-footer";
    this.bottomUserEmailField = "#user\\[email\\]-footer";
    this.bottomUserPasswordField = "#user\\[password\\]-footer";
    this.bottomSubmitButton =
      ".home-hero-signup div " + Cypress.config().baseSubmitButton;

    this.startFreeTrialButton = "[href^='/organizations']";

    this.pageUrl = Cypress.config().baseUrl;
  }
}

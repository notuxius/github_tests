/// <reference types="cypress" />

import {
  randomUsername,
  randomUserEmail,
  randomUserPassword,
} from "../support/globals";

import { SignInPage } from "../page_objects/sign_in_page";
import { Header } from "../page_objects/header";
import { HomePage } from "../page_objects/home_page";
import { JoinPage } from "../page_objects/join_page";
import { ForgotPasswordPage } from "../page_objects/forgot_password_page";

const signInPage = new SignInPage();
const header = new Header();
const homePage = new HomePage();
const joinPage = new JoinPage();
const forgotPasswordPage = new ForgotPasswordPage();

beforeEach(() => {
  cy.visit(homePage.pageUrl);
});

afterEach(() => {
  cy.ensureUserIsSignedOut();
});

Cypress.Commands.add(
  "enterUsername",
  (formField, username = randomUsername) => {
    cy.get(formField).type(username).should("have.value", username);
  }
);

Cypress.Commands.add("enterEmail", (formField, userEmail = randomUserEmail) => {
  cy.get(formField).type(userEmail).should("have.value", userEmail);
});

Cypress.Commands.add(
  "enterPassword",
  (formField, userPassword = randomUserPassword) => {
    cy.get(formField).type(userPassword).should("have.value", userPassword);
  }
);

// TODO add enter key submit if submitButton is null
Cypress.Commands.add("submit", (submitButton) => {
  cy.get(submitButton).click();
});

Cypress.Commands.add("ensureUserIsSignedOut", () => {
  cy.visit(homePage.pageUrl);

  cy.verifyUserIsOn("HomePage");
  cy.get("body").then(($body) => {
    if ($body.find(header.loggedInUserProfileDropdown).length > 0) {
      cy.visit(Cypress.config().baseUrl + Cypress.config().signOutUrlPart);
      cy.get(Cypress.config().signOutButton).click();
    }
  });
});

Cypress.Commands.add("verifyUserIsOn", (expectedPage) => {
  let expectedPageUrl;

  if (expectedPage == "HomePage") {
    expectedPageUrl = Cypress.config().baseUrl;
  } else if (expectedPage == "JoinPage") {
    expectedPageUrl = joinPage.pageUrl;
  } else if (expectedPage == "SignInPage") {
    expectedPageUrl = signInPage.pageUrl;
  } else if (expectedPage == "ForgotPasswordPage") {
    expectedPageUrl = forgotPasswordPage.pageUrl;
  }
  cy.currentPageUrlIs(expectedPageUrl);
});

Cypress.Commands.add("currentPageUrlIs", (pageUrl) => {
  cy.url().then(() => {
    cy.url().should("eq", pageUrl);
  });
});

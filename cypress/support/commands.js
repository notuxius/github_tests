/// <reference types="cypress" />

import {
  randomUsername,
  randomUserEmail,
  randomUserPassword,
  signedUpUserEmail,
  signedUpUserPassword,
} from "../support/globals";

import { Header } from "../page_objects/header";
import { HomePage } from "../page_objects/home_page";
import { SignInPage } from "../page_objects/sign_in_page";
import { SignOutPage } from "../page_objects/sign_out_page";

const header = new Header();
const homePage = new HomePage();
const signInPage = new SignInPage();
const signOutPage = new SignOutPage();

beforeEach(() => {
  cy.navigate(homePage);
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
  if (submitButton) {
    cy.get(submitButton).click();
    // } else {
  }
});

// TODO refactor
Cypress.Commands.add(
  "currentPageShouldBe",
  (expectedPage, presicion = "eq") => {
    if (presicion == "eq") {
      cy.currentPageUrl().should("eq", expectedPage.pageUrl);
    } else if (presicion == "fuzzy") {
      cy.currentPageUrl().should("include", expectedPage.pageUrl);
    }
  }
);

Cypress.Commands.add("currentPageUrl", () => {
  cy.url().then(() => {
    return cy.url();
  });
});

Cypress.Commands.add("navigate", (page) => {
  if (cy.currentPageUrl() != page.pageUrl) {
    cy.visit(page.pageUrl).then(() => {
      cy.currentPageShouldBe(page);
    });
  }
});

// TODO improve logout detection without spare visits to the homepage
Cypress.Commands.add("userIsSignedIn", () => {
  cy.navigate(homePage);

  cy.get("body").then(($body) => {
    return $body.find(header.loggedInUserProfileDropdown).length > 0;
  });
});

Cypress.Commands.add("userShouldBeSignedIn", () => {
  cy.userIsSignedIn().should("eq", true);
});

Cypress.Commands.add("userShouldBeSignedOut", () => {
  cy.userIsSignedIn().should("eq", false);
});

Cypress.Commands.add("signInUser", () => {
  cy.get(header.signInLink).click();
  cy.currentPageShouldBe(signInPage);
  cy.enterEmail(signInPage.userEmailField, signedUpUserEmail);
  cy.enterPassword(signInPage.userPasswordField, signedUpUserPassword);
  cy.submit(signInPage.submitButton);

  cy.userShouldBeSignedIn();
});

// TODO add 'if signed in' condition before signing out
Cypress.Commands.add("signOutUser", () => {
  cy.navigate(signOutPage);
  cy.get(signOutPage.submitButton).click();

  cy.userShouldBeSignedOut();
});

Cypress.Commands.add("hoverHeaderDropdown", (headerDropdown) => {
  cy.contains(header.dropdown, headerDropdown).click();
  cy.get(header.dropdownMenu).should("be.visible");
});

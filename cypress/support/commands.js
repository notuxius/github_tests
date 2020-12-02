/// <reference types="cypress" />

import {
  randomName,
  randomEmail,
  randomWorkEmail,
  randomPhone,
  randomPassword,
  signedUpUserEmail,
  signedUpUserPassword,
} from "../support/globals";

import { Header } from "../page_objects/header";
import { HomePage } from "../page_objects/home_page";
import { SignInPage } from "../page_objects/sign_in_page";
import { SignOutPage } from "../page_objects/sign_out_page";
import { SearchPage } from "../page_objects/search_page";

const header = new Header();
const homePage = new HomePage();
const signInPage = new SignInPage();
const signOutPage = new SignOutPage();
const searchPage = new SearchPage();

beforeEach(() => {
  cy.navigate(homePage);
});

// TODO add enterText
// TODO check for element visiblity for typing into it
Cypress.Commands.add("enterName", (formField, name = randomName) => {
  cy.get(formField).type(name).should("have.value", name);
});

Cypress.Commands.add("enterPhone", (formField, phone = randomPhone) => {
  cy.get(formField).type(phone).should("have.value", phone);
});

// TODO make single email gen func
Cypress.Commands.add("enterWorkEmail", (formField, email = randomWorkEmail) => {
  cy.get(formField).type(email).should("have.value", email);
});

Cypress.Commands.add("enterEmail", (formField, email = randomEmail) => {
  cy.get(formField).type(email).should("have.value", email);
});

Cypress.Commands.add(
  "enterPassword",
  (formField, password = randomPassword) => {
    cy.get(formField).type(password).should("have.value", password);
  }
);

// TODO add enter key submit if submitButton is null or even autodetect submit button
Cypress.Commands.add("submit", (submitButton) => {
  if (submitButton) {
    cy.get(submitButton).click();
    // } else {
  }
});

// TODO refactor
Cypress.Commands.add(
  "currentPageShouldBe",
  (expectedPage, presicion = "strict") => {
    if (presicion == "strict") {
      cy.currentPageUrl().should("eq", expectedPage.pageUrl);
    } else if (presicion == "fuzzy") {
      cy.currentPageUrl().should("include", expectedPage.pageUrl);
    }
  }
);

Cypress.Commands.add("currentPageUrl", () => {
  cy.url({ log: false }).then(() => {
    return cy.url({ log: false });
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

Cypress.Commands.add("searchFromHeader", (searchTerm) => {
  cy.get(header.searchField)
    .clear()
    .type(searchTerm)
    .should("have.value", searchTerm)
    .click()
    .then(() => {
      cy.get(header.searchDropdown).click();
    });

  cy.location("search").should(
    "include",
    searchPage.textSearchQueryKey + searchTerm
  );
});

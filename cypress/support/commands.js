/// <reference types="cypress" />

import faker from "faker";

import { SignInPage } from "../page_objects/sign_in_page";
import { Header } from "../page_objects/header";
import { HomePage } from "../page_objects/home_page";
import { JoinPage } from "../page_objects/join_page";
import { ForgotPasswordPage } from "../page_objects/forgot_password_page";

const header = new Header();
const homePage = new HomePage();
const joinPage = new JoinPage();
const signInPage = new SignInPage();
const forgotPasswordPage = new ForgotPasswordPage();

const randomUserName = faker.random.number() + faker.random.word();
const randomUserEmail = faker.internet.email();
const randomUserPassword = faker.internet.password();

const signedUpUserEmail = Cypress.env().github_user_email;
const signedUpUserPassword = Cypress.env().github_user_password;

beforeEach(() => {
  cy.visit(homePage.pageUrl);
});

afterEach(() => {
  cy.ensureUserIsSignedOut();
});

Cypress.Commands.add(
  "enterUsername",
  (formField, userName = randomUserName) => {
    cy.get(formField).type(userName).should("have.value", userName);
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

Cypress.Commands.add("preSignUpUserFromHomePageAtThe", (part) => {
  if (part == "top") {
    cy.enterUsername(homePage.topUserNameField);
    cy.enterEmail(homePage.topUserEmailField);
    cy.enterPassword(homePage.topUserPasswordField);
    cy.submit(homePage.topSubmitButton);
  } else if (part == "bottom") {
    cy.enterUsername(homePage.bottomUserNameField);
    cy.enterEmail(homePage.bottomUserEmailField);
    cy.enterPassword(homePage.bottomUserPasswordField);
    cy.submit(homePage.bottomSubmitButton);
  }

  cy.verifyUserIsOn("JoinPage");
  cy.get(joinPage.verifyYourAccountFrame).should("be.visible");
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

Cypress.Commands.add("signInUserFromSignInPage", () => {
  cy.get(header.signInLink).click();
  cy.verifyUserIsOn("SignInPage");
  cy.enterEmail(signInPage.userEmailField, signedUpUserEmail);
  cy.enterPassword(signInPage.userPasswordField, signedUpUserPassword);
  cy.submit(signInPage.submitButton);
});

Cypress.Commands.add("sendForgotPasswordMailFromSignInPage", (email) => {
  let userEmail = signedUpUserEmail;
  let messageElement = forgotPasswordPage.checkYourEmailSuccessTextElement;
  let messageText = forgotPasswordPage.checkYourEmailSuccessText;

  if (email) {
    if (email == "noEmail") {
      userEmail = "";
    } else if (email == "incorrectEmail") {
      userEmail = randomUserName;
    }
    messageElement = forgotPasswordPage.checkYourEmailFailureTextElement;
    messageText = forgotPasswordPage.checkYourEmailFailureText;
  }

  cy.get(header.signInLink).click();
  cy.get(signInPage.forgotPasswordLink).click();
  cy.verifyUserIsOn("ForgotPasswordPage");
  if (userEmail) {
    cy.enterEmail(forgotPasswordPage.userEmailField, userEmail);
  }
  cy.submit(forgotPasswordPage.submitButton);
  cy.get(messageElement).should("have.textTrimmed", messageText);
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

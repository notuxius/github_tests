/// <reference types="cypress" />

import { ForgotPasswordPage } from "../page_objects/forgot_password_page";

const forgotPasswordPage = new ForgotPasswordPage();

describe("user sign in with email and password", () => {
  it.only("user sign in with correct email and password", () => {
    cy.signInUser();
    cy.signOutUser();
  });

  it("user sees success message after correct email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail();
  });

  it("user sees error message after no email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail("noEmail");
  });

  it("user sees error message after incorrect email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail("incorrectEmail");
  });
});

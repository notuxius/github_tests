/// <reference types="cypress" />

describe("sign in with email and password", () => {
  it("can verify user sign in with correct email and password", () => {
    cy.signInUserFromSignInPage();
  });
  it("can verify user sees success message after correct email enter", () => {
    cy.sendForgotPasswordMailFromSignInPage();
  });
  it("can verify user sees error message after no email enter", () => {
    cy.sendForgotPasswordMailFromSignInPage("noEmail");
  });
  it("can verify user sees error message after incorrect email enter", () => {
    cy.sendForgotPasswordMailFromSignInPage("incorrectEmail");
  });
});

/// <reference types="cypress" />

describe("user registration with random username, email and password", () => {
  it("can verify user pre-registration with top form", () => {
    cy.preSignUpUserFromHomePageAtThe("top");
  });
  it("can verify user pre-registration with bottom form", () => {
    cy.preSignUpUserFromHomePageAtThe("bottom");
  });
});

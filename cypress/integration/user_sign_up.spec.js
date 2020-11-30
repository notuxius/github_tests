/// <reference types="cypress" />

import { HomePage } from "../page_objects/home_page";

const homePage = new HomePage();

describe("user registration with random username, email and password", () => {
  it("can verify user pre-registration with top form", () => {
    homePage.preSignUpUserWithFormAtThe("top");
  });
  it("can verify user pre-registration with bottom form", () => {
    homePage.preSignUpUserWithFormAtThe("bottom");
  });
});

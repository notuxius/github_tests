/// <reference types="cypress" />

import { SignInPage } from "../page_objects/sign_in_page";
import { ForgotPasswordPage } from "../page_objects/forgot_password_page";

const signInPage = new SignInPage();
const forgotPasswordPage = new ForgotPasswordPage();

describe("sign in with email and password", () => {
  it("can verify user sign in with correct email and password", () => {
    signInPage.signInUser();
  });
  it("can verify user sees success message after correct email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail();
  });
  it("can verify user sees error message after no email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail("noEmail");
  });
  it("can verify user sees error message after incorrect email enter", () => {
    forgotPasswordPage.sendForgotPasswordMail("incorrectEmail");
  });
});

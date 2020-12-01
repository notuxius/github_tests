/// <reference types="cypress" />

import faker from "faker";

export const randomName = faker.random.word() + faker.random.number();
export const randomEmail = faker.internet.email();
const emailRegExp = new RegExp("@.*", "g");
export const randomWorkEmail = randomEmail.replace(emailRegExp, "@github.com");
export const randomPhone = faker.phone.phoneNumber();
export const randomPassword = faker.internet.password();

export const signedUpUserEmail = Cypress.env().github_user_email;
export const signedUpUserPassword = Cypress.env().github_user_password;

export const verifyYourAccountFrame = "iframe.js-octocaptcha-frame";

export const submitButton = "[type=submit]";

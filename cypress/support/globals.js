/// <reference types="cypress" />

import faker from "faker";

export const randomUsername = faker.random.number() + faker.random.word();
export const randomUserEmail = faker.internet.email();
export const randomUserPassword = faker.internet.password();

export const signedUpUserEmail = Cypress.env().github_user_email;
export const signedUpUserPassword = Cypress.env().github_user_password;

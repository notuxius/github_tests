export class JoinPage {
  constructor() {
    this.verifyYourAccountFrame = "iframe.js-octocaptcha-frame";

    this.pageUrl = Cypress.config().baseUrl + Cypress.config().joinUrlPart;
  }
}

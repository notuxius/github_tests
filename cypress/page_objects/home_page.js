export class HomePage {
  constructor() {
    this.topUserNameField = "#user\\[login\\]";
    this.topUserEmailField = "#user\\[email\\]";
    this.topUserPasswordField = "#user\\[password\\]";
    this.topSubmitButton =
      ".home-hero-signup > " + Cypress.config().baseSubmitButton;

    this.bottomUserNameField = "#user\\[login\\]-footer";
    this.bottomUserEmailField = "#user\\[email\\]-footer";
    this.bottomUserPasswordField = "#user\\[password\\]-footer";
    this.bottomSubmitButton =
      ".home-hero-signup div " + Cypress.config().baseSubmitButton;

    this.pageUrl = Cypress.config().baseUrl;
  }
}

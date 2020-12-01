/// <reference types="cypress" />

export class TrialPage {
  constructor() {
    this.usernameField = "#contact_request_name";
    this.companyNameField = "#contact_request_organization_name";
    this.workEmailField = "#contact_request_email";
    this.phoneField = "#contact_request_phone";

    this.chooseYourInstallationTypeRadioButtons =
      "[for='contact_request_instance_type'] ~ #contact-form-linkto";
    this.chooseYourInstallationTypeRadioButtonsAzure =
      this.chooseYourInstallationTypeRadioButtons + " " + "[value='azure']";

    this.doYouHaveAnyOtherQuestionsRadioButtons =
      "[for='contact_request_comments'] ~ #contact-form-linkto";
    this.doYouHaveAnyOtherQuestionsRadioButtonsYes =
      this.doYouHaveAnyOtherQuestionsRadioButtons + " " + "[value='yes']";

    this.no = this.iHerebyAcceptTheTermsCheckbox =
      "#contact_request_agreed_to_terms";

    this.pageUrl = Cypress.config().baseEnterpriseUrl + "trial?";
  }
}

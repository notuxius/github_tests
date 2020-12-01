/// <reference types="cypress" />

export class SearchPage {
  constructor() {
    this.searchResultsLinks = ".repo-list a";

    this.textSearchQueryKey = "q=";
    this.languageSearchQueryKey = "l=";

    this.pageUrl = Cypress.config().baseUrl + "search?";
  }

  selectLanguage(languageText) {
    cy.contains(languageText).click();
    cy.location("search").should(
      "include",
      this.languageSearchQueryKey + languageText
    );
  }
}

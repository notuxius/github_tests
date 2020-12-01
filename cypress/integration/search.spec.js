/// <reference types="cypress" />

import { SearchPage } from "../page_objects/search_page";

const searchPage = new SearchPage();

// TODO tranform into single it with invoke or trigger of hovering
// TODO more granular named dropdowns menus selectors checks
describe("text search from header search field", () => {
  it("sought text is displayed on search page", () => {
    cy.searchFromHeader("cypress");
    // cy.searchFromHeader("webdriverio");
    cy.intercept(searchPage.pageUrl).as("searchForResults");
    searchPage.selectLanguage("TypeScript");

    // TODO make a search page separate func
    cy.wait("@searchForResults").then(() => {
      cy.get(searchPage.searchResultsLinks)
        .first()
        .click()
        .should("have.attr", "href")
        .then((href) => {
          cy.currentPageUrl().should("include", href);
        });
    });
  });
});

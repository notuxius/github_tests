/// <reference types="cypress" />

import { Header } from "../page_objects/header";
import { SearchPage } from "../page_objects/search_page";

const header = new Header();
const searchPage = new SearchPage();

// TODO tranform into single it with invoke or trigger of hovering
// TODO more granular named dropdowns menus selectors checks
describe("text search from header search field", () => {
  it("sought text is displayed on search page", () => {
    cy.searchFromHeader("cypress");
    cy.searchFromHeader("webdriverio");
  });
});

/// <reference types="cypress" />

import { Header } from "../page_objects/header";
import { ExplorePage } from "../page_objects/explore_page";
import { TopicsPage } from "../page_objects/topics_page";

const header = new Header();
const explorePage = new ExplorePage();
const topicsPage = new TopicsPage();

// TODO tranform into single it with invoke or trigger of hovering
// TODO more granular named dropdowns menus selectors checks
describe("text search from header search field", () => {
  it("sought text is displayed on search page", () => {
    cy.get(header.searchField).type("cypress{enter}");
  });

  // it("'explore' dropdown is visible on hover", () => {
  //   cy.hoverHeaderDropdown(header.exploreDropdown);
  // });

  // it("'pricing' dropdown is visible on hover", () => {
  //   cy.hoverHeaderDropdown(header.pricingDropdown);
  // });

  // it("'topics' text is visible on 'topics' page", () => {
  //   cy.hoverHeaderDropdown(header.exploreDropdown);
  //   cy.get(header.exploreDropdownMenuExploreItem).click();

  //   cy.currentPageShouldBe(explorePage);
  //   cy.get(topicsPage.exploreNavigation).click();

  //   cy.currentPageShouldBe(topicsPage);
  //   cy.get(topicsPage.centerPageHeading).should(
  //     "have.text",
  //     topicsPage.centerPageHeadingText
  //   );
  // });
});

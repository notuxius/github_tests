/// <reference types="cypress" />

import { ExploreNavigation } from "./explore_navigation";

const exploreNavigation = new ExploreNavigation();

export class TopicsPage {
  constructor() {
    this.centerPageHeadingText = "Topics";
    this.centerPageHeading = ".text-center h1";

    this.exploreNavigation =
      exploreNavigation.navigation + " " + "[href='/topics']";

    this.pageUrl = Cypress.config().baseUrl + "topics";
  }
}

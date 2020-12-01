/// <reference types="cypress" />

import { Footer } from "../page_objects/footer";
import { CarrersPage } from "../page_objects/carrers_page";

const carrersPage = new CarrersPage();
const footer = new Footer();

describe("carrers -> open positions", () => {
  it("open position are logged into console", () => {
    cy.get(footer.careersLink).click();

    cy.currentPageShouldBe(carrersPage);
    cy.get(carrersPage.openPositionsLink).click();

    cy.get("body")
      .find(carrersPage.openPositionsTitlesHeadings)
      .each(($heading) => {
        cy.log($heading.text());
      });
  });
});

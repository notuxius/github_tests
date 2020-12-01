/// <reference types="cypress" />

export class Header {
  constructor() {
    this.dropdown = ".HeaderMenu-summary";
    this.dropdownMenu = this.dropdown + " ~ " + ".dropdown-menu";

    this.whyGithubDropdown = "Why GitHub?";
    this.exploreDropdown = "Explore";
    this.pricingDropdown = "Pricing";

    this.pricingDropdownMenuPlansItem =
      this.dropdownMenu + " " + "[href='/pricing']";

    this.exploreDropdownMenuExploreItem =
      this.dropdownMenu + " " + "[href='/explore']";
    this.exploreDropdownMenuTopicsItem =
      this.dropdownMenu + " " + "[href='/topics']";

    this.searchField = "[data-scoped-placeholder='Search']";
    this.searchDropdown = "[data-item-type='global_search']";

    this.signInLink = '[href*="/login"]';
    this.loggedInUserProfileDropdown = '[aria-label="View profile and more"]';
  }
}

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

    this.searchField = "[aria-label='Search GitHub']";

    this.signInLink = '[href*="/login"]';
    this.loggedInUserProfileDropdown = '[aria-label="View profile and more"]';
  }
}

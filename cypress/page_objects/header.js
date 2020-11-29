export class Header {
  constructor() {
    this.signInLink = 'a[href*="/login"]';
    this.loggedInUserProfileDropdown = 'summary[aria-label*="View profile"]';
  }
}

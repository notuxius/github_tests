/// <reference types="cypress" />

import "./commands";

chai.Assertion.addMethod("textTrimmed", function (expectedString) {
  const $element = this._obj;

  new chai.Assertion($element).to.be.exist;

  const actual = $element.text().trim();
  const expected = expectedString.trim();
  this.assert(
    actual === expected,
    " Expected #{this} to have text #{exp} after trimmed, but the text was #{act} after trimmed",
    "expected #{this} not to have text #{exp} after trimmed",
    expected,
    actual
  );
});

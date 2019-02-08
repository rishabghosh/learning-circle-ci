const { add } = require("../src/lib.js");
const assert = require("assert");

describe("add", () => {
  it("should return that number if ony one number is provided", () => {
    const actual = add(5);
    const expected = 5;
    assert.strictEqual(actual, expected);
  });
  it("should add two numbers", () => {
    const actual = add(5, 4);
    const expected = 9;
    assert.strictEqual(actual, expected);
  });
  it("should add three numbers", () => {
    const actual = add(7, 8, 9);
    const expected = 24;
    assert.strictEqual(actual, expected);
  });
});

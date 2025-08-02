const sum = require("./sum");

test("5 + 1 = 6: ", () => {
  expect(sum(5, 1)).toBe(6);
});

test("-1 + 1 = 0: ", () => {
  expect(sum(-1, 1)).toBe(0);
});

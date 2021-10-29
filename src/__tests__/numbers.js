import { addNumbers } from "../utilities";

test("Check the addition of integer numbers", () => {
  expect(addNumbers(4, 5)).toEqual(9);
});

test("Check the addition of floating point numbers", () => {
  expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
});

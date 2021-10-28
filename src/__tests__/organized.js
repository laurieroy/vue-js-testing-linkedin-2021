import { addNumbers, countriesCollection, johnDoe } from "../utilities";

describe("Unit tests", () => {
  describe("Testing strings", () => {
    test("Find dogs", () => {
      expect("It's raining cats and dogs").toMatch(/dogs/);
    });
  });

  describe("Testing numeric values", () => {
    test("check the addition of numbers", () => {
      expect(addNumbers(4, 5)).toEqual(9);
    });

    test("adding floating point numbers", () => {
      expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe("Testing objects and arrays", () => {
    test("Check available countries", () => {
      expect(countriesCollection).toContain("Nigeria");
    });

    test("Check user info", () => {
      expect(johnDoe).toEqual(
        expect.objectContaining({ age: 26, occupation: "Accountant" })
      );
    });
  });
});

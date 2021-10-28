import { countriesCollection, johnDoe } from "../utilities";

test("Check available countries", () => {
  expect(countriesCollection).toContain("Nigeria");
});

// check negative case
// test("Check available countries", () => {
//   expect(countriesCollection).toContain("France");
// });

test("Check user info", () => {
  expect(johnDoe).toEqual(
    expect.objectContaining({
      age: 26,
      occupation: "Accountant",
    })
  );
});

// check negative case expecting to fail
// test ("Check user info", () => {
//   expect(johnDoe).toEqual(expect.objectContaining({
//     age: 26,
//     occupation: "Programmer"
//   }))
// })

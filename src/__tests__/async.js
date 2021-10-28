import { asyncPrint } from "../utilities";
// both syntax are valid and neither has an advantage, user preference
// test("Test asynchronous printing", () => {
//   return asyncPrint().then((data) => {
//     expect(data).toBe("Hello World");
//   });
// });

test("Test asynchronous printing", async () => {
  await expect(asyncPrint()).resolves.toBe("Hello World");
});

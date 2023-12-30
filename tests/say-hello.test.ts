import { sayHello } from "../src/say-hello";

describe("sayhello", () => {
  it("should return hello name", function () {
    expect(sayHello("Ziman")).toBe("Hello Ziman");
  });
});

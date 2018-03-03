jest.mock("../http");
import http from "../http";

describe("test", () => {
  it("test", () => {
    expect(http()).toBe("fake http");
  });
});

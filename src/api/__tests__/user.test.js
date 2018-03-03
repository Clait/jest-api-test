jest.mock("../http");
import http from "../http";

describe("user api test", () => {
  const url = "xxx.yyy.com/user";
  it("user GET should be 200", async () => {
    const result = await http({
      url,
      method: "get",
      statusCode: 200
    });
    expect(result.data.username).toBe("Kodo");
  });

  it("user POST should be 200", async () => {
    const result = await http({
      url,
      method: "post",
      statusCode: 200
    });
    expect(result.code).toBe(0);
  });

  it("user GET should be 200", async () => {
    const result = await http({
      url,
      method: "get",
      statusCode: 400
    });
    expect(result.msg).toBe("invald params");
  });
});

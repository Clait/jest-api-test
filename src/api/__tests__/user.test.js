jest.mock("../http");
import http, { setStatus } from "../http";
import initUserData from "../../service/someNeedTest";

// api mock test
describe("user api test", () => {
  const url = "xxx.yyy.com/user";
  setStatus(200);
  it("user GET should be 200", async () => {
    const result = await http({
      url,
      method: "get"
    });
    expect(result.data.username).toBe("Kodo");
  });

  it("user POST should be 200", async () => {
    const result = await http({
      url,
      method: "post"
    });
    expect(result.code).toBe(0);
  });

  it("user GET should be 200", async () => {
    // test api reject
    try {
      await http({
        url,
        method: "get"
      });
    } catch (e) {
      expect(e.msg).toBe("invald params");
    }
  });
});

jest.mock("../../api/http");
import http, { setStatus } from "../../api/http";
import initUserData from "../someNeedTest";

// service cases
describe("service initUserData test", () => {
  it("if user age is 18, age should be 19", async () => {
    expect.assertions(1);
    setStatus(200);
    const result = await initUserData();
    // console.log(result);
    expect(result.data.age).toBe(19);
  });

  it("initUserData 400", async () => {
    expect.assertions(1);
    setStatus(400);
    const result = await initUserData();
    expect(result.msg).toBe("invald params");
  });
});

jest.mock("../http");
import http from "../http";
import initUserData from '../../service/someNeedTest';

// api mock test
describe("user api test", () => {
  const url = "xxx.yyy.com/user";
  it("user GET should be 200", async () => {
    const result = await http({
      url,
      method : "get",
      statusCode : 200
    });
    expect(result.data.username).toBe("Kodo");
  });
  
  it("user POST should be 200", async () => {
    const result = await http({
      url,
      method : "post",
      statusCode : 200
    });
    expect(result.code).toBe(0);
  });
  
  it("user GET should be 200", async () => {
    // test api reject
    try {
      await http({
        url,
        method : "get",
        statusCode : 400
      });
    } catch (e) {
      expect(e.msg).toBe("invald params");
    }
  });
  
});

// service cases
describe('service initUserData test', () => {
  
  it("if user age is 18, age should be 19", async () => {
    expect.assertions(1);
    const result = await initUserData();
    expect(result.data.age).toBe(19);
  });
  
});

# jest-api-test

> mocking api test with jest

## mock data

```javascript
// user.data.js
export default {
  "GET 200": {
    code: 0,
    msg: "ok",
    data: {
      username: "Kodo",
      age: 18
    }
  },
  "POST 200": {
    code: 0,
    msg: "xxx"
  },
  "GET 400": {
    msg: "invald params",
    code: -1
  },
  "GET 401": {}
};
```

## Test

```javascript
// user.test.js
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
```

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
// api user.test.js
describe("user api test", () => {
  const url = "xxx.yyy.com/user";
  it("user GET should be 200", async () => {
    setStatus(200);

    const result = await http({
      url,
      method: "get"
    });
    expect(result.data.username).toBe("Kodo");
  });

  it("user POST should be 200", async () => {
    setStatus(200);

    const result = await http({
      url,
      method: "post"
    });
    expect(result.code).toBe(0);
  });

  it("user GET should be 400", async () => {
    // test api reject
    setStatus(400);
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
```

```javascript
// test service cases
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
```

// ./api/__mockData__/user.js
export default {
  "GET 200": {
    code: 0,
    msg: "ok",
    data: {
      username: "Kodo",
      age: 18
    }
  },
  "GET 200 ERROR": {
    code: 0,
    msg: "ok",
    data: {
      username: "Kodo",
      age: 15
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

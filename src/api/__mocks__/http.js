// ./api/__mocks__/http.fake.js
// 直接读取本地假数据
let statusCode;
export function setStatus(code) {
  statusCode = code;
}

export default function http({ url = "", data = {}, method = "get" }) {
  return new Promise((resolve, reject) => {
    const lastSlash = url.lastIndexOf("/");
    const module = url.substring(lastSlash + 1);
    const mockData = require(`../__mockData__/${module}.data`).default;
    const result = mockData[`${method.toUpperCase()} ${statusCode}`];

    process.nextTick(
      () => (statusCode === 200 ? resolve(result) : reject(result))
    );
  });
}

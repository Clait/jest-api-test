jest.mock('../http');

import initUserData from '../../service/someNeedTest';
import http, { setStatus } from '../http';

const util = require('../../util');

// api mock test
describe('user api test', () => {
  const url = 'xxx.yyy.com/user';
  setStatus(200);
  it('user GET should be 200', async () => {
    const result = await http({
      url,
      method: 'get'
    });
    expect(result.data.username).toBe('Kodo');
  });

  it('user POST should be 200', async () => {
    const result = await http({
      url,
      method: 'post'
    });
    expect(result.code).toBe(0);
  });

  it('user GET should be 200', async () => {
    // test api reject
    try {
      await http({
        url,
        method: 'get'
      });
    } catch (e) {
      expect(e.msg).toBe('invald params');
    }
  });
});

// service cases
describe('service initUserData test', () => {
  it('if user age is 18, age should be 19', async () => {
    expect.assertions(1);
    setStatus(200);
    const result = await initUserData();
    // console.log(result);
    expect(result.data.age).toBe(19);
  });

  it('initUserData 400', async () => {
    util.useErrorMode = true;
    expect.assertions(1);
    setStatus(400);
    const result = await initUserData();
    expect(result.msg).toBe('invald params');
    util.useErrorMode = false;
  });
});

import getUser from '../api/user';

const util = require('../util');

export default async function initUserData() {
  /* istanbul ignore next */
  util.useErrorMode = true;
  try {
    const user = await getUser();
    console.log(user);
    // console.log(user); // age 18
    if (user.data.age === 18) {
      user.data.age += 1;
    }
    return user; // age 19
  } catch (e) {
    return 'error';
  }
  util.useErrorMode = false; // Restore after finish test.
}

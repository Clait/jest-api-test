import getUser from '../api/user';

export default async function initUserData() {
  try {
    const user = await getUser();
    // console.log(user); // age 18
    /* istanbul ignore next */
    if (user.data.age === 18) {
      user.data.age += 1;
    }
    
    return user;
  } catch (e) {
    return e;
  }
}

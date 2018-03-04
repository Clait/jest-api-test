// Define test mode, default is ''
let testMode = ''; 

const util = {
  set useErrorMode(v) {
    if (v) {
      testMode = 'error';
    }
  },
  get useErrorMode() {
    return testMode;
  }
};

module.exports = util;

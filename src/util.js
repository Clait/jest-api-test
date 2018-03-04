// Define test mode, default is ''
let errorMode = false;

const util = {
  set useErrorMode(v) {
    errorMode = v;
  },
  get useErrorMode() {
    return errorMode;
  }
};

module.exports = util;

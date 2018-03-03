const path = require("path");

module.exports = {
  collectCoverage: true,
  testEnvironment: "jsdom",
  rootDir: path.resolve(__dirname, "./"),
  moduleFileExtensions: ["js"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  }
  // setupFiles: ["jest-localstorage-mock"]
};

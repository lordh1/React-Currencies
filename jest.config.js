module.exports = {
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "setupTests.js"
  ],
  setupFilesAfterEnv: ["./setupTests.js"],
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};

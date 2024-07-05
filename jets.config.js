module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-css"
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@babel|@testing-library)"
  ]
};

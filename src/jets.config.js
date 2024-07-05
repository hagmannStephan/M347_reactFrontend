module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
      "^.+\\.css$": "jest-transform-css"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@testing-library)"
    ]
  };
  
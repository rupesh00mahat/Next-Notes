const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  collectCoverageFrom : [
    "src/app/**/*.{js, jsx, ts, tsx}",
    "src/app/components/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
  coverageThreshold: {
    global: {
      statements: 90, // minimum 80% statement coverage
      branches: 80,   // minimum 80% branch coverage
      functions: 80,  // minimum 80% function coverage
      lines: 80,      // minimum 80% line coverage
    },
  },
};
module.exports = createJestConfig(customJestConfig);
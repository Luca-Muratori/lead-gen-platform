const nextJest = require('next/jest');

// why: We pass __dirname to ensure Next.js looks for /src/app inside this specific folder
const createJestConfig = nextJest({
  dir: './', 
});

const customJestConfig = {
  setupFilesAfterEnv: [], // we will add a setup file later if needed
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // why: This tells Jest that the "root" for this specific project is this folder
  rootDir: '.', 
};

module.exports = createJestConfig(customJestConfig);
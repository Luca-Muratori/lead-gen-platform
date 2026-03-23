/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require('next/jest');
// why: We use a file-level disable because Jest configs in Next.js 
// require CommonJS 'require' to function correctly in the Node environment.

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: [],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  rootDir: '.',
};

module.exports = createJestConfig(customJestConfig);
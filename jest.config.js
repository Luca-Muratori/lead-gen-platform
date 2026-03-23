/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // why: We want Jest to look into both apps and packages
  projects: [
    '<rootDir>/apps/storefront/jest.config.js',
    '<rootDir>/apps/dashboard/jest.config.js',
  ],
  // why: Ignore the compiled Next.js folders
  modulePathIgnorePatterns: ['<rootDir>/.next/']
};
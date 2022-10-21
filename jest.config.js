/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/src/**/*.ts',
    '!<rootDir>/packages/**/src/**/constant.ts',
    '!<rootDir>/packages/**/src/**/index.ts',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'js'],
  coverageReporters: ['json', 'lcov', 'html'],
  projects: [
    {
      displayName: 'Common UI Package',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
      testMatch: [
        '<rootDir>/packages/common-ui/src/**/*.spec.ts',
        '<rootDir>/packages/common-ui/src/**/test/*.spec.ts',
      ],
      testPathIgnorePatterns: ['<rootDir>/packages/common-ui/dist'],
    },
    {
      displayName: 'Web',
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.ts?$': 'ts-jest',
      },
      testMatch: [
        '<rootDir>/packages/web/src/**/*.spec.ts',
        '<rootDir>/packages/web/src/**/test/*.spec.ts',
      ],
    },
  ],
};

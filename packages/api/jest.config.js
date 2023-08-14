/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: './src/.*\\.(spec)?\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  "roots": [
    "<rootDir>/src"
  ]
};
module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [
    'text',
    'html',
  ],
  resetMocks: true,
  setupFiles: [
    '<rootDir>/test-setup.js',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
  // testFileExtensions: [
  //   'js',
  //   'jsx',
  // ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.(js|jsx)',
  ],
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest',
  // },
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};

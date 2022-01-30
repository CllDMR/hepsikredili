module.exports = {
  displayName: 'api-main-shared-auth',
  preset: '../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/api/main/shared/auth',
  globalSetup: '../../../../../test/globalSetup.ts',
  globalTeardown: '../../../../../test/globalTeardown.ts',
  setupFilesAfterEnv: ['../../../../../test/setupFile.ts'],
};

module.exports = {
  displayName: 'api-main-ad-detail',
  preset: '../../../../jest.preset.js',
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
  coverageDirectory: '../../../../coverage/libs/api/main/ad-detail',
  globalSetup: '../../../../test/globalSetup.ts',
  globalTeardown: '../../../../test/globalTeardown.ts',
  setupFilesAfterEnv: ['../../../../test/setupFile.ts'],
};

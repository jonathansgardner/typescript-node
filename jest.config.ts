import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  roots: [ '<rootDir>/src' ],
  testEnvironment: 'node',
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts|js|jsx)$',
  transform: { '^.+\\.(ts|ts|js|jsx)?$': 'ts-jest' }
};

export default config;

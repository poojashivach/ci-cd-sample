export default {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  globals: {
    'babel-jest': {
      useESM: true,
    },
  },
};

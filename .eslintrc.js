module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ctcd`
  extends: ['ctcd'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    'react/no-unescaped-entities': 'off',
  },
  ignorePatterns: ['**/graphql/codegen/*.ts'],
};

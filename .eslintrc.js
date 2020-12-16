module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    '@typescript-eslint/no-unused-vars': [2, {
      'argsIgnorePattern': '^_',
      'caughtErrorsIgnorePattern': '^_',
    }],
    'react/prop-types': 0,
    'camelcase': 0,
    'max-len': 0,
    'no-console': [1, {allow: ['warn', 'error']}],
    'require-jsdoc': 0,
    'quote-props': 0,
  },
};

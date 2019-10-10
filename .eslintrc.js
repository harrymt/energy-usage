module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'jest',
    'prettier',
    'cypress',
    'jsx-a11y',
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'ignoreRestSiblings': true
    }]
  },
}

module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'all'
    }],
    '@typescript-eslint/camelcase': ['error', { 'allow': ['^__', '^[A-Z0-9_]+$'] }]
  },
  'overrides': [
    {
      'files': ['./*.config.js'],
      'rules': {
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/explicit-function-return-type': 0
      }
    }
  ]
}

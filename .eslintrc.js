module.exports = {
  extends: 'airbnb/base',
  parser: 'babel-eslint',
  rules:
  {
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'implicit-arrow-linebreak': 'off',
    'max-len': ['error', 120]
  }
}

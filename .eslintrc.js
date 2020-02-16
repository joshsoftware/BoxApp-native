module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'react/no-array-index-key': 0,
    'import/no-extraneous-dependencies': 0,
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    fetch: false,
  },
  parser: 'babel-eslint',
};

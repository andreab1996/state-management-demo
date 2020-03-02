// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   rules: {
//     'prettier/prettier': 0,
//   },
// };


module.exports = {
  'root': true,
  //'extends': 'airbnb',
  'extends': '@react-native-community',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': 0,
  },
  'globals': {
    "fetch": false
  }
}
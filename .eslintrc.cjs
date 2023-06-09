/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true,
    "amd": true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    'vue/multi-word-component-names':1,
    'no-unused-vars':1
  }
}

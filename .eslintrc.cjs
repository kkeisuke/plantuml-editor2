/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    eqeqeq: 'error',
    'dot-notation': 'error',
    camelcase: 'error',
    '@typescript-eslint/ban-types': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'], // script setup では動かない? https://github.com/vuejs/eslint-plugin-vue/issues/1629
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/v-on-function-call': 'error',
    'vue/dot-notation': 'error', // for template
    'vue/eqeqeq': 'error', // for template
    'vue/multi-word-component-names': 'off',
    'no-console': 'error',
    'no-debugger': 'error'
  },
  overrides: [
    {
      files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ]
}

const jsRules = {
  'arrow-parens': [ true, 'ban-single-arg-parens' ],
  'indent': [ true, 'spaces', 2 ],
  'no-consecutive-blank-lines': [ true, 1 ],
  'no-console': true,
  'no-debugger': true,
  'no-implicit-dependencies': [ true, 'dev', 'optional' ],
  'no-var-keyword': true,
  'object-literal-sort-keys': false,
  'one-variable-per-declaration': true,
  'ordered-imports': [
    true,
    { 'grouped-imports': true },
  ],
  'quotemark': [
    true,
    'single',
    'avoid-escape',
    'avoid-template',
  ],
  'semicolon': [ true, 'never' ],
  'triple-equals': [ true, 'allow-null-check' ],
  'trailing-comma': [
    true,
    {
      singleline: 'never',
      multiline: {
        objects: 'always',
        arrays: 'always',
        functions: 'never',
        typeLiterals: 'always',
      },
    },
  ],
  'whitespace': [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-module',
    'check-separator',
    'check-rest-spread',
    'check-type',
    'check-typecast',
    'check-type-operator',
    'check-preblock',
  ],

  // tslint-eslint-rules
  'array-bracket-spacing': true,
  'block-spacing': true,
  'brace-style': [ true, '1tbs', { 'allowSingleLine': true } ],
  'no-control-regex': true,
  'no-constant-condition': true,
  'no-duplicate-case': true,
  'no-empty-character-class': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': true,
  'no-ex-assign': true,
  'no-inner-declarations': true,
  'no-invalid-regexp': true,
  'no-irregular-whitespace': true,
  'no-multi-spaces': true,
  'no-regex-spaces': true,
  'no-unexpected-multiline': true,
  'object-curly-spacing': [ true, 'always' ],
  'space-in-parens': [ true, 'never' ],
  'ter-arrow-body-style': [ true, 'as-needed' ],
  'ter-arrow-spacing': true,
  'ter-computed-property-spacing': true,
  'ter-func-call-spacing': true,
  'ter-max-len': [
    true, 100, 2,
    {
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreImports': true,
    },
  ],
  'ter-newline-after-var': true,
  'ter-no-mixed-spaces-and-tabs': { 'type': 'spaces' },
  'ter-no-sparse-arrays': true,
  'ter-no-self-compare': true,
  'ter-no-tabs': true,
  'valid-typeof': true,
  // tslint-eslint-rules
}

const rules = Object.assign({
  'interface-name': [ true, 'never-prefix' ],
  'member-access': false,
}, jsRules)

module.exports = {
  extends: [
    'tslint:recommended',
    'tslint-eslint-rules',
  ],
  rules,
  jsRules,
}

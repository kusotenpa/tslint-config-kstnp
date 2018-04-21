module.exports = {
  env: { es6: true, node: true },
  rules: {
    'array-bracket-spacing': [ 2, 'always' ],
    'comma-dangle': [ 2, 'always-multiline' ],
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'computed-property-spacing': [2, 'always'],
    indent: [ 2, 2 ],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {'max': 1}],
    'no-tabs': 2,
    'object-curly-spacing': [2, 'always'],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'space-in-parens': 2,
  }
}

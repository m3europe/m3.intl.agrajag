module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-m3.intl.agrajag/base',
  ].map(require.resolve),
  parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
  plugins: [
    'react',
  ],
  rules: {
    // Some sensible changes
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, {
      nonEmpty: 'after-props',
      selfClosing: 'after-props',
    }],

    // Because sometimes things just shouldn't be allowed
    'react/prefer-es6-class': [2, 'never'],
  },
};

module.exports = {
  extends: 'eslint-config-m3.intl.agrajag/rules/base',
  rules: {
    // Some sensible changes
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, {
      nonEmpty: 'after-props',
      selfClosing: 'after-props',
    }],
    'react/prefer-stateless-function': [0],

    // Because sometimes you just have to follow the crowd
    'react/prefer-es6-class': [2, 'always'],
  },
};

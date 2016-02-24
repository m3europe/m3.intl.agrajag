module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-m3.intl.agrajag/rules/base',
  ].map(require.resolve),
};

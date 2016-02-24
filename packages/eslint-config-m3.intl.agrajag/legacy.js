module.exports = {
  extends: [
    'eslint-config-airbnb/legacy',
    'eslint-config-m3.intl.agrajag/rules/legacy',
  ].map(require.resolve),
};

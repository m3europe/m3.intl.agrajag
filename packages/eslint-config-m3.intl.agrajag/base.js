module.exports = {
  extends: [
    'eslint-config-airbnb/base',
    'eslint-config-m3.intl.agrajag/legacy',
  ].map(require.resolve),
};

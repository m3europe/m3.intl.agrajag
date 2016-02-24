module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-m3.intl.agrajag/rules',
  ].map(require.resolve),
};

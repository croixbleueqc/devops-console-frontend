const baseConfig = require('@teambit/react/prettier/prettier.config');
module.exports = {
  ...baseConfig,
  endOfLine: 'lf',
  // tabWidth: 4, // Sadly, `bit lint` command does not use root prettier/eslint config. So to avoid formatting conflict, `tabWidth` cannot be define here because it already define in bit prettier config: node_modules/@teambit/react/prettier/prettier.config.js
  printWidth: 100,
};

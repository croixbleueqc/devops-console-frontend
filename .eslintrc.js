module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react'],
  rules: {
    'import/order': 'off', // Avoid VSCode eslint error: `The "path" argument must be of type string. Received null Occurred while linting`
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};

module.exports = {
  extends: ['./node_modules/@teambit/react.eslint-config-bit-react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/order': 'off', // Avoid VSCode eslint error: `The "path" argument must be of type string. Received null Occurred while linting`
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};

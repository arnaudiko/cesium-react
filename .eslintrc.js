module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:node/recommended",
    "prettier",
    "prettier/react",
  ],
  parserOptions: {
    ecmaVersion: 2019,
  },
  plugins: ["import", "node"],
  root: true,
  rules: {
    "no-console": 0,
  },
  settings: {
    react: {
      version: "16.4",
    },
  },
  overrides: [
    {
      files: ["rollup.config.js", ".storybook/**/*.js"],
      excludedFiles: [".storybook/webpack.config.js"],
      env: {
        commonjs: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        "node/no-unsupported-features/es-syntax": [
          2,
          {
            ignores: ["modules"],
          },
        ],
      },
    },
    {
      files: ["src/**/*.js", "examples/src/**/*.js"],
      env: {
        browser: true,
        commonjs: true,
        node: false,
      },
      globals: {
        process: true,
      },
      parser: "babel-eslint",
      parserOptions: {
        sourceType: "module",
      },
      plugins: ["react"],
      rules: {
        "node/no-unsupported-features/es-syntax": 0,
        "react/display-name": 2,
        "react/jsx-key": 2,
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-children-prop": 2,
        "react/no-danger-with-children": 2,
        "react/no-deprecated": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-find-dom-node": 2,
        "react/no-is-mounted": 2,
        "react/no-render-return-value": 2,
        "react/no-string-refs": 2,
        "react/no-unescaped-entities": 2,
        "react/no-unknown-property": 2,
        "react/no-unsafe": 0,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 2,
        "react/require-render-return": 2,
      },
    },
    {
      files: ["src/**/*.test.js"],
      env: {
        "jest/globals": true,
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": 1,
        "jest/no-focused-tests": 2,
        "jest/no-identical-title": 2,
        "jest/prefer-to-have-length": 1,
        "jest/valid-expect": 2,
      },
    },
  ],
};

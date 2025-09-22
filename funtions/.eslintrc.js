module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
    "/generated/**/*", // Ignore generated files.
    "*.js", // Ignore JS config files
  ],
  rules: {
    "quotes": ["error", "single"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "max-len": ["error", {"code": 100}],
    "object-curly-spacing": ["error", "always"],
    "require-jsdoc": "off",
    "linebreak-style": "off", // Disable for Windows compatibility
    "comma-dangle": ["error", "always-multiline"],
    "eol-last": ["error", "always"],
  },
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-unused-vars": ["error", {"argsIgnorePattern": "^_"}],
      },
    },
  ],
};
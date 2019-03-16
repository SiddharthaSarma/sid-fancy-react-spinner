module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "standard",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["plugin:react/recommended"],
  rules: {
    semi: [2, "always"]
  }
};

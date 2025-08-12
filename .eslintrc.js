module.exports = {
  root: true,
  extends: ["@react-native", "plugin:react/recommended", "plugin:react/jsx-runtime", "prettier"],
  plugins: ["import", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    // "no-undef": "off",
    "react-native/no-inline-styles": "off",
    "no-shadow": "off",
    "newline-before-return": "warn",
    "no-unreachable": "warn",
    // eslint-import-order-plugin
    "sort-imports": ["warn", { ignoreCase: true, ignoreDeclarationSort: true }],
    "import/order": [
      "warn",
      {
        groups: [["external", "builtin"], "internal", ["sibling", "parent"], "index"],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before"
          },
          {
            pattern: "src/**",
            group: "internal",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        }
      }
    ],
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ]
  }
}

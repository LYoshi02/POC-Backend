const path = require("path");

module.exports = {
  settings: {
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "tsconfig.json")
      }
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        printWidth: 100,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: "auto"
      }
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", "parent", ["sibling", "index"]],
        "newlines-between": "always",
        named: true,
        alphabetize: {
          order: "asc"
        }
      }
    ]
  }
};

import { FlatCompat } from "@eslint/eslintrc";
import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  ...compat.extends("plugin:import/errors"),
  ...compat.extends("plugin:import/warnings"),
  ...compat.extends("plugin:import/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
      semi: "error",
      "eol-last": "error",
      indent: ["error", 2],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", ["internal", "parent", "sibling", "index"]],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
    },
    ignores: [".eslintrc.js", "jest.config.js"],
  },
  {
    files: ["**/*.test.ts", "**/*.spec.ts"],
    env: {
      jest: true,
    },
  },
];

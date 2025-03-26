import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["eslint.config.ts"],
  format: ["esm", "cjs"],
  dts: false,
  outDir: "dist",
  clean: true,
  target: "node18",
  external: [
    "@eslint/eslintrc",
    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser"
  ],
});

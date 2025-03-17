# @mykyta-isai/eslint-config

This is my custom **ESLint configuration** for TypeScript projects, designed to ensure a clean and consistent code style. It includes **TypeScript support**, **import order rules**, and **various best practices**.

## 🚀 Installation

To use this ESLint configuration in your project, install it along with the required peer dependencies:

```bash
npm install --save-dev @mykyta-isai/eslint-config eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

or if you use Yarn:

```bash
yarn add --dev @mykyta-isai/eslint-config eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

🛠️ Usage
To enable this ESLint configuration in your project, create an eslint.config.js file in the root of your project and extend the configuration from this package:

```bash
import eslintConfig from "@mykyta-isai/eslint-config";

export default eslintConfig;
```
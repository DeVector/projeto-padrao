import { defineConfig } from "eslint/config";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.recommended,
  pluginPrettier.configs.recommended,
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest", // Usar a versão mais recente do ECMAScript
      sourceType: "module", // Usar módulos
    },
    plugins: ["react", "@typescript-eslint", "react-hooks"], // Plugins para React, TypeScript e hooks do React
    rules: {
      "react-hooks/rules-of-hooks": "error", // Regras para hooks do React
      "react-hooks/exhaustive-deps": "warn", // Avisos sobre dependências de hooks
      "react/prop-types": "off", // Desabilitar a verificação de tipos para props (não necessário com TypeScript)
      "react/react-in-jsx-scope": "off", // Desabilitar a regra de React em escopo (não necessário em versões mais novas do React)
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desabilitar a exigência de tipos explícitos para limites de módulos em TypeScript
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    }
  }
]);

# Getting Started with Create React App

## Este projeto foi criado com o ReactJs:

### `npx create-react-app contatos-ebac-exercicio --template typescript`

## Editor config:

Para a edição de algumas praticas que serão um padrão do projeto criamos um arquivo na raiz do projeto com o nome de .editorconfid:

### Dentro do arquivo:

####  `root = true
       [*]
       charset = utf-8
       end_of_line = lf
       insert_final_newline = true
       trim_trailing_whitespace = true
       
       [*.{js,jsx,ts,tsx}]
       ident_style = space
       indent_size = 2
       
       [*.{css, scss}]
       indent_style = space
       indent_size = 2
       
       [*.md]
       trim_trailing_whitespace = false` 

## Instalando o ESlint

### `npm init @eslint/config@lates`

Ele serve para deixar padrões de projeto caso alguem queira realizar algumas alterações ele irá ajudar a criar esses padrões para que o projeto não tenha mais de um padrão.

## Instalando o React-hooks

### `npm install eslint-plugin-react-hooks --save-dev`

Você irá configurar de acordo com as suas configurações que você fez durante a inicialização do seu projeto.

## Instalando o styled-components

### `npm install styled-components`

## Intregrando o Typescript

### `npm install @types/styled-components`

## Instalando o plugin do Prettier para Styled Components

### `npm install --save-dev prettier-plugin-styled-components`

## Instalando o Typescript

### `npm install @types/react --save-dev`

## Instalando o Redux

### `npm install --save react-redux @reduxjs/toolkit --legacy-peer-deps`

## Adicionando configuração

Adicionando configuração no eslint.config.mjs

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Aplica as regras a arquivos JS, JSX, TSX, TS, etc.
  },
  {
    languageOptions: {
      globals: globals.browser, // Configura os globais do ambiente do navegador
    },
  },
  pluginJs.configs.recommended, // Regras recomendadas para JavaScript
  ...tseslint.configs.recommended, // Regras recomendadas para TypeScript
  pluginReact.configs.recommended, // Regras recomendadas para React
  pluginPrettier.configs.recommended, // Regras recomendadas para integração com Prettier
  {
    // Configurações adicionais
    parser: "@typescript-eslint/parser", // Usar o parser TypeScript
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
    },
  },
];

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { FlatCompat } from '@eslint/eslintrc';
import { globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

const compat = new FlatCompat();

export default [
  globalIgnores([
    'dist',
    'eslint.config.js',
    'vite.config.ts',
    '.prettierrc',
    '.gitignore',
    '.prettierignore',
  ]),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  prettierConfig,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      'react-refresh': reactRefresh,
      react,
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      prettier: prettierPlugin, // ✅ now defined
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error', // ✅ now works
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

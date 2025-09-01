// Import ESLint core configs and plugins
import js from '@eslint/js'; // ESLint's built-in JS config
import globals from 'globals'; // Common global variables (browser, node, etc.)
import reactHooks from 'eslint-plugin-react-hooks'; // React Hooks linting rules
import reactRefresh from 'eslint-plugin-react-refresh'; // React Fast Refresh linting
import tseslint from 'typescript-eslint'; // TypeScript ESLint plugin and parser
import react from 'eslint-plugin-react'; // React linting rules
import { FlatCompat } from '@eslint/eslintrc'; // Compatibility layer for legacy configs
import { globalIgnores } from 'eslint/config'; // Helper to ignore files/folders globally
import prettierConfig from 'eslint-config-prettier'; // Disables ESLint rules that conflict with Prettier
import prettierPlugin from 'eslint-plugin-prettier'; // Runs Prettier as an ESLint rule

const compat = new FlatCompat(); // Instantiate compatibility helper

export default [
  // Globally ignore build/config files and folders
  globalIgnores([
    'dist',
    'eslint.config.js',
    'vite.config.ts',
    '.prettierrc',
    '.gitignore',
    '.prettierignore',
  ]),

  // Apply recommended JS rules
  js.configs.recommended,
  // Apply recommended TypeScript rules
  ...tseslint.configs.recommended,
  // Apply recommended React rules (compat for legacy config)
  ...compat.extends('plugin:react/recommended'),
  // Apply recommended React Hooks rules (compat for legacy config)
  ...compat.extends('plugin:react-hooks/recommended'),
  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // Main config block for source files
  {
    files: ['**/*.{ts,tsx,js,jsx}'], // Target TS/JS/TSX/JSX files
    languageOptions: {
      ecmaVersion: 2020, // Use ES2020 syntax
      globals: globals.browser, // Use browser globals
      parser: tseslint.parser, // Use TypeScript parser
    },
    plugins: {
      'react-refresh': reactRefresh, // React Fast Refresh plugin
      react, // React plugin
      '@typescript-eslint': tseslint.plugin, // TypeScript plugin
      'react-hooks': reactHooks, // React Hooks plugin
      prettier: prettierPlugin, // Prettier plugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Don't require React in scope for JSX
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Warn if not only exporting components (for Fast Refresh)
      'prettier/prettier': 'error', // Treat Prettier formatting issues as errors
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
    },
  },
];

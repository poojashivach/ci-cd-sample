// Import recommended ESLint config for JavaScript
import js from '@eslint/js';
// Import global variables for different environments (like browser)
import globals from 'globals';
// Import React Hooks ESLint plugin
import reactHooks from 'eslint-plugin-react-hooks';
// Import React Refresh ESLint plugin (for fast refresh in development)
import reactRefresh from 'eslint-plugin-react-refresh';
// Import TypeScript ESLint plugin
import tseslint from 'typescript-eslint';
// Import Prettier ESLint config (for code formatting)
import prettier from 'eslint-config-prettier';
// Import React ESLint plugin
import react from 'eslint-plugin-react';
// Import global ignore helper from ESLint config
import { globalIgnores } from 'eslint/config';

// Export ESLint configuration as an array
export default [
  // Ignore specified files and folders from linting
  globalIgnores([
    'dist',
    //'.eslintrc.cjs',
    'eslint.config.js',
    'vite.config.ts',
    '.prettierrc',
    '.gitignore',
    '.prettierignore',
  ]),
  {
    // Apply this config to all TypeScript files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // Set ECMAScript version to 2020
      ecmaVersion: 2020,
      // Use browser globals (like window, document)
      globals: globals.browser,
      // Use TypeScript parser for linting
      parser: tseslint.parser,
    },
    plugins: {
      // Add React Refresh plugin
      'react-refresh': reactRefresh,
      // Add React plugin
      react: react,
      // Add TypeScript ESLint plugin
      '@typescript-eslint': tseslint,
      // Add Prettier plugin for formatting
      prettier: prettier,
      // Add React Hooks plugin
      'react-hooks': reactHooks,
    },
    extends: [
      // Use recommended JavaScript ESLint rules
      js.configs.recommended,
      // Use recommended TypeScript ESLint rules
      tseslint.configs.recommended,
      // Use recommended rules for React
      react.configs['recommended-latest'],
      // Use Prettier config to disable formatting rules that conflict with Prettier
      prettier,
      // Use latest recommended config for React Hooks
      reactHooks.configs['recommended-latest'],
      // Use React Refresh config for Vite
      reactRefresh.configs.vite,
    ],
    rules: {
      // Disable the rule that requires React to be in scope in JSX files (not needed in React 17+)
      'react/react-in-jsx-scope': 'off',
      // Warn if components are not exported as constants (for React Refresh compatibility)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Treat Prettier formatting issues as errors
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        // Automatically detect React version for linting
        version: 'detect',
      },
    },
  },
];

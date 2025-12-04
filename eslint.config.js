import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appConfig = {
  files: ['app/**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
    'no-console': ['warn'],
    'no-debugger': ['warn'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-deprecated': ['error'],
    'prefer-const': ['error'],
    'no-useless-escape': ['warn'],
  },
};

export default [
  {
    ignores: ['node_modules', '.next', 'dist', 'build', 'pnpm-lock.yaml'],
  },
  {
    files: ['eslint.config.js', 'vitest.config.ts', 'postcss.config.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        module: 'readonly',
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: config.files || ['app/**/*.{ts,tsx}'],
  })),
  appConfig,
];

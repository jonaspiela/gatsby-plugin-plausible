import path from 'node:path'
import { fileURLToPath } from 'node:url'
import babelParser from '@babel/eslint-parser'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    files: ['src/**/*.js'],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      react,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
      },

      parser: babelParser,
      ecmaVersion: 2018,
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'linebreak-style': ['error', 'unix'],
    },
  },
]

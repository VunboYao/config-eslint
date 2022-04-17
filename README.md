# config-eslint
the best config for eslint, extends @antfu

# Usage

## install

`pnpm add -D eslint @vunbo/eslint-config`

## Config `.eslintrc`

```javascript
module.exports = {
  extends: '@vunbo',
}
```

## Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# Override rules

- `'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }]`
- `'curly': ['error', 'all']`

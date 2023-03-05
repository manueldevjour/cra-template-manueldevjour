module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true,
        },
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        }
    },
    "plugins": ["prettier", "@typescript-eslint", "react", "react-hooks"],
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
    ],
    "rules": {
        "semi": ["error", "never"],
        "no-console": ["warn"],
        "no-unused-vars": ["warn"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
    },
    "settings": {
      "react": {
        // Tells eslint-plugin-react to automatically detect the version of React to use.
        "version": 'detect',
      },
      // Tells eslint how to resolve imports
      'import/resolver': {
        "node": {
          "paths": ['src'],
          "extensions": ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
}
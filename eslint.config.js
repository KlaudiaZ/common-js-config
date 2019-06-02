module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "prettier"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "rules": {
        "prettier/prettier": "error",
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn"
                ]
            }
        ]
    }
}
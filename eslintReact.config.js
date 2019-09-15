module.exports = (ecmaVersion = 6, jsx = true, env = { browser: true, node: false }) => ({
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "airbnb",
         "airbnb/hooks"
    ],
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaVersion": ecmaVersion,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": jsx
        }
    },
    "env": {
        "browser": env.browser,
        "node": env.node,
        "es6": ecmaVersion >= 6
    },
    "rules": {
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn"
                ]
            }
        ],
        "quotes": ["error", "double"],
        "import/prefer-default-export": "off",
        "indent": ["error", "tab"],
        "no-tabs": ["error", { "allowIndentationTabs": true }],
        "react/jsx-indent": ["error", "tab"],
        "react/jsx-indent-props": ["error", "tab"]
    }
});

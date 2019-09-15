module.exports = (ecmaVersion = 6, env = { browser: true, node: false }) => ({
    "extends": [
        "eslint:recommended",
        "airbnb-base"
    ],
    "parser": "babel-eslint",
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaVersion": ecmaVersion,
        "sourceType": "module"
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
        "arrow-parens": ["error", "as-needed"],
        "comma-dangle": ["error", "never"]
    }
});

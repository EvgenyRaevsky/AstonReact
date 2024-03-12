module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    plugins: [
        "react"
    ],
    rules: {
        "no-console": "warn",
        "import/prefer-default-export": "off",
        "react/jsx-no-useless-fragment": "warn",
        "react/react-in-jsx-scope": "off",
        "no-unused-expressions": "error",
        "react/prop-types": "off",
    }
}

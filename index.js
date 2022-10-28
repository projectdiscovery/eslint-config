module.exports = {
        env: { es2021: true },
        plugins: [
                "fp-ts",
                "jsdoc"
        ],
        extends: [
                "airbnb",
                "airbnb-typescript",
                "plugin:fp-ts/recommended",
                "adjunct",
                "plugin:jsdoc/recommended"
        ],
        parserOptions: {
                ecmaFeatures: {
                        jsx: true,
                },
                ecmaVersion: 12,
                sourceType: 'module',
        },
        rules: {
                'no-use-before-define': 'warn',
                '@typescript-eslint/no-use-before-define': ['warn'],
                'import/extensions': 'warn',
                'no-redeclare': 'off', // Needed for type declarations
                'no-unused-vars': 'warn',
                '@typescript-eslint/no-unused-vars': 'error',
                'react/require-default-props': 'warn',
                'no-nested-ternary': 'warn',
                'no-param-reassign': 'warn',
                'import/no-unresolved': 'warn',
                "@typescript-eslint/no-redeclare": "warn" // Needed to have types named the same as objects
        },
}

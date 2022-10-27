module.exports = {
        env: { es2021: true },
        extends: ["airbnb", "airbnb-typescript", "adjunct", "fp-ts"],
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
                'fp-ts/no-lib-imports': 'error',
                'no-param-reassign': 'warn',
                'import/no-unresolved': 'warn',
        },
}

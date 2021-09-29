module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
        // 'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
        // "prettier/@typescript-eslint"
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    rules: {
        'import/extensions': 'off',
        'react/display-name': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 0,
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['.storybook/**', 'stories/**', '**/*.story.tsx']
            }
        ]
    }
};

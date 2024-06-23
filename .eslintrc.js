module.exports = {
    env: {
        node: true,
        commonjs: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ['airbnb', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'testing-library', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': [
            'off',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: './',
                devDependencies: true,
            },
        ],
    },
};

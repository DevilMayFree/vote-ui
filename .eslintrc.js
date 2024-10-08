// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "vue/multi-word-component-names": [
            "error",
            {
                ignores: ["index"], //需要忽略的组件名
            },
        ],
        'no-unused-vars': [
            'error',
            // we are only using this rule to check for unused arguments since TS
            // catches unused variables but not args.
            { varsIgnorePattern: '.*', args: 'none' }
        ],
    },
};

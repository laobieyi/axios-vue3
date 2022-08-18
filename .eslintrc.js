module.exports = {
  extends: ['alloy', 'alloy/vue'],
  plugins: ['simple-import-sort'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）

    browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    // semi: [0],
    // 'no-unused-vars': 1, // 警告声明后未使用的变量
    // 'default-case': 2, // switch语句最后必须有default
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // "sort-imports": "off",
    // "import/order": "off",
  },
}

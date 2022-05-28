module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: '@antfu',
  rules: {
    /*
    0 或 off: 关闭规则
    1 或 warn： 警告
    2 或 error： 错误
     */
    // 强制模块大括号换行规则
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 模块必须使用大括号
    'curly': ['error', 'all'],
    'no-console': 1,
  },
}

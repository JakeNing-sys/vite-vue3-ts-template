module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 增加新功能
        'fix', // 修复 bug
        'docs', // 文档变更
        'style', // 代码格式化
        'refactor', // 重构代码，既不是修复 bug 也不是增加新功能
        'perf', // 优化性能
        'test', // 增加测试用例
        'chore', // 构建过程或辅助工具的变动
        'revert', // 撤销上一次提交
        'build', // 打包发布
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}

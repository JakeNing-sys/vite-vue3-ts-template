/**
 * 获取函数返回值的类型TS示例代码（非工具函数）
 * @param fn 要获取返回值的函数
 * @returns 返回值的类型
 */
const getUsers = () => ({
  name: '唱歌',
  age: 18,
  gender: 'rap',
  likes: {
    music: ['rap', 'rap', 'rap'],
  },
})

type ReturnTypeUser = ReturnType<typeof getUsers>
// ReturnTypeUser 结果： { name: string; age: number; gender: string; likes: { music: string[]; }; }

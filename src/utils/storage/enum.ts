// 字典 Dictionaries，expire 过期时间 key，Dictionaries 永久不过期。

export enum Dictionaries {
  PERMANENT = 'permanent',
  EXPIRE = '__expire__', // （__ 表示私有）
}

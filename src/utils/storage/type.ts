// expire 过期时间 key，Dictionaries 永久不过期。

import { Dictionaries } from './enum'

export type Key = string
export type Expire = Dictionaries.PERMANENT | number // 时间戳 或者 Dictionaries.PERMANENT表示永不过期。

export interface Result<T> {
  message: string
  value: T | null
}

export interface Data<T> {
  value: T
  [Dictionaries.EXPIRE]: Expire
}

export interface StorageCls {
  get: <T>(key: Key) => Result<T | null>
  set: <T>(key: Key, value: T, expire: Expire) => void
  remove: (key: Key) => void
  clear: () => void
}

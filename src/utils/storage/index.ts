import { Dictionaries } from './enum'
import type { StorageCls, Key, Expire, Data, Result } from './type'

export class Storage implements StorageCls {
  set<T>(key: Key, value: T, expire: Expire) {
    const data = {
      value, // 存储的值
      [Dictionaries.EXPIRE]: expire, // 过期时间
    }

    localStorage.setItem(key, JSON.stringify(data))
  }

  get<T>(key: Key): Result<T | null> {
    const value = localStorage.getItem(key)

    if (value) {
      const data: Data<T> = JSON.parse(value)
      const now = Date.now()

      // 判断是否过期
      if (
        typeof data[Dictionaries.EXPIRE] === 'number' &&
        data[Dictionaries.EXPIRE] < now
      ) {
        this.remove(key)
        return {
          message: `您的${key}已过期`,
          value: null,
        }
      } else {
        return {
          message: '获取成功',
          value: data.value,
        }
      }
    } else {
      return {
        message: '没有找到该数据',
        value: null,
      }
    }
  }

  remove(key: Key) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

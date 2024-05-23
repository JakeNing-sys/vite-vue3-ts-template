// TS 类型收窄

const isString = (value: any): value is string => typeof value === 'string'

const isNumber = (value: any): value is number => typeof value === 'number'

const isBoolean = (value: any): value is boolean => typeof value === 'boolean'

const isNull = (value: any): value is null => value === null

const isUndefined = (value: any): value is undefined => value === undefined

const isSymbol = (value: any): value is symbol => typeof value === 'symbol'

const isBigInt = (value: any): value is bigint => typeof value === 'bigint'

const isObject = (value: any): value is object =>
  typeof value === 'object' && value !== null

const isArray = (value: any): value is any[] => Array.isArray(value)

const isFunction = (value: any): value is Function =>
  typeof value === 'function'

/**
 * 长轮询
 * @param getData 获取数据的函数
 * @param delay 获取失败后，延迟重试的时间，单位ms
 */

interface ILongPolling {
  promise: Promise<any>
  onlongPolling: () => void
  offlongPolling: () => void
}

class LongPolling implements ILongPolling {
  public promise: Promise<any>
  private resolve: (value: any) => void
  private reject: (reason: any) => void
  private isPolling: boolean = false

  constructor(getData: () => Promise<void>, delay: number = 1000) {
    const { promise, resolve, reject } = Promise.withResolvers()

    this.promise = promise
    this.resolve = resolve
    this.reject = reject
    this.startLongPolling(getData, delay)
  }

  // 初始化长轮询
  public async startLongPolling(getData: () => Promise<void>, delay: number) {
    if (this.isPolling) return

    try {
      await getData()
      await new Promise((resolve) => setTimeout(resolve, delay))
      this.startLongPolling(getData, delay)
      this.resolve('success')
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      this.startLongPolling(getData, delay)
      this.reject(error)
    }
  }

  // 开启长轮询
  public onlongPolling() {
    this.isPolling = false
  }

  // 关闭长轮询
  public offlongPolling() {
    this.isPolling = true
  }

  // 返回 promise 对象
  public getPromise() {
    return this.promise
  }
}

export default LongPolling

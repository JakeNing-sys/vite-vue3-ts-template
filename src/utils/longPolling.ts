/**
 * 订阅数据
 * @param getData 获取数据的函数
 * @param delay 获取失败后，延迟重试的时间，单位ms
 */

interface IlongPolling {
  promise: Promise<any>
  onlongPolling: () => void
  offlongPolling: () => void
}

let isUnlongPollingd = false

const longPolling = (
  getData: () => Promise<void>,
  delay: number = 300000,
): IlongPolling => {
  const { promise, resolve, reject } = Promise.withResolvers()

  const recursivelongPolling = async () => {
    if (isUnlongPollingd) return

    try {
      await getData()
      await new Promise((resolve) => setTimeout(resolve, delay))
      recursivelongPolling()
      resolve('success')
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      recursivelongPolling()
      reject(error)
    }
  }

  recursivelongPolling()

  const onlongPolling = () => {
    isUnlongPollingd = false
  }

  const offlongPolling = () => {
    isUnlongPollingd = true
  }

  return { promise, onlongPolling, offlongPolling }
}

export default longPolling

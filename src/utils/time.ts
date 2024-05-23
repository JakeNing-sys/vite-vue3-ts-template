import dayjs from 'dayjs'

// 获取当前时间段
export const getNowTime = () => {
  const time = dayjs()
  const hour = time.hour()

  let msg = ''

  if (hour >= 0 && hour <= 6) {
    msg = '凌晨'
  } else if (hour > 6 && hour <= 9) {
    msg = '早上'
  } else if (hour > 9 && hour <= 11) {
    msg = '上午'
  } else if (hour > 11 && hour <= 13) {
    msg = '中午'
  } else if (hour > 13 && hour <= 17) {
    msg = '下午'
  } else if (hour > 17 && hour <= 19) {
    msg = '傍晚'
  } else if (hour > 19 && hour <= 24) {
    msg = '晚上'
  }

  return `${msg}好`
}

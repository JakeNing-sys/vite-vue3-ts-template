/**
 * Vite 获取静态图片资源
 * @param name 图片名称
 * @returns 图片资源的URL
 */
export const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

/**
 * 随机获取16进制颜色
 */
export const getColor = () => {
  const usedColors = new Set<string>() // 在函数外部定义一个颜色集合

  const getRandomColor = () => {
    let color =
      '#' + Math.floor(Math.random() * 16777215 * 0.6 + 3355443).toString(16)

    // 转换颜色为大写
    color = color.toUpperCase()

    // 检查颜色是否已经存在，如果存在则重新生成
    while (usedColors.has(color) || color === '#FFFFFF') {
      color =
        '#' + Math.floor(Math.random() * 16777215 * 0.6 + 3355443).toString(16)
      color = color.toUpperCase()
    }

    // 添加新颜色到集合
    usedColors.add(color)

    return color
  }

  return {
    usedColors,
    getRandomColor,
  }
}

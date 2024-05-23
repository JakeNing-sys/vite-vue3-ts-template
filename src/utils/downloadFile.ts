/**
 * 使用Fetch API下载文件。
 * @param {string} url - 要下载的文件的URL地址。
 * @returns {Promise<string>} - 下载完成时解析返回的消息，如果有错误则拒绝。
 */
async function downloadFile(url: string): Promise<string> {
  try {
    const response = await fetch(url)

    // 检查响应是否成功
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const blob: Blob = await response.blob() // 将响应数据转换为Blob对象

    // 创建一个链接用于下载
    const blobUrl: string = window.URL.createObjectURL(blob)
    const a: HTMLAnchorElement = document.createElement('a')
    a.style.display = 'none'
    a.href = blobUrl
    a.download = url.split('/').pop() || 'download' // 尝试获取文件名，如果无法获取则默认为'download'

    document.body.appendChild(a)
    a.click() // 模拟点击以触发下载

    // 清理用完的对象URL和创建的<a>标签
    window.URL.revokeObjectURL(blobUrl)
    document.body.removeChild(a)

    return '下载完成' // 返回成功消息
  } catch (error) {
    console.error('下载失败:', error)
    throw error // 向调用者传递错误
  }
}

// 调用示例
// downloadFile('https://example.com/path/to/your/file')
//   .then(message => console.log(message))
//   .catch(error => console.error('捕获的错误:', error));

<template>
  <div class="wh-100">
    <a-flex justify="center">
      <a-upload-dragger
        style="width: 500px; margin-top: 50px"
        v-model:fileList="fileList"
        name="file"
        :multiple="true"
        action="string"
        :customRequest="handleUpload"
        @change="handleChange"
        @drop="handleDrop"
      >
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或拖拽文件到此区域进行上传</p>
        <p class="ant-upload-hint">
          支持单文件或批量上传，单文件最大 50M，批量上传最大 500M
        </p>
      </a-upload-dragger>
    </a-flex>
  </div>
</template>

<script setup lang="ts" name="UploadFile">
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'

const fileList = ref([])

const handleChange = (info: UploadChangeParam) => {
  const status = info.file.status
  if (status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`)
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}

const handleDrop = (e: DragEvent) => {
  console.log(e)
}

// 上传文件自定义上传文件
const handleUpload = (data: any) => {
  const { file } = data
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    const base64 = reader.result as string
    console.log(base64)
  }
}
</script>

<style scoped lang="scss"></style>

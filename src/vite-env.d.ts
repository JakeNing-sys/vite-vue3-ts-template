/// <reference types="vite/client" />

// 声明全局模块
declare module 'nprogress'

declare namespace NodeJS {
  type Timer = any
  type Timeout = any
}

declare module '@wangeditor/editor-for-vue' {
  const Editor: any
  const Toolbar: any
  type IEditorConfig = any
}

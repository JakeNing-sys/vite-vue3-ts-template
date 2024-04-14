import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite' // 自动导入VueApi插件
import { createHtmlPlugin } from 'vite-plugin-html' // html模板插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // svg图标插件
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 定义Vue组件名称插件

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd()) // 获取环境变量

  return {
    base: '/vite-vue3-ts-template/', // github仓库名称
    plugins: [
      vue(),
      vueSetupExtend(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: viteEnv.VITE_APP_TITLE,
          },
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/svgIcons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-import.d.ts',
        eslintrc: {
          enabled: false, // 用于生成eslint配置
        },
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variables.scss";',
        },
      },
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        [viteEnv.VITE_API_TARGET]: {
          target: viteEnv.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
        },
      },
    },
  }
})

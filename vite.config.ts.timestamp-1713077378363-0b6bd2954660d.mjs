// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/vite@5.2.8_@types+node@20.12.7_sass@1.75.0/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.8_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import AutoImport from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import { createHtmlPlugin } from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.2.8/node_modules/vite-plugin-html/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.8/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vueSetupExtend from "file:///E:/%E6%A1%8C%E9%9D%A2/vite-vue3-ts-template/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.2.8/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\\u684C\u9762\\vite-vue3-ts-template";
var vite_config_default = defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd());
  return {
    base: "/vite-vue3-ts-template/",
    // github仓库名称
    plugins: [
      vue(),
      vueSetupExtend(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: viteEnv.VITE_APP_TITLE
          }
        }
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/svgIcons")],
        symbolId: "icon-[dir]-[name]"
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "src/auto-import.d.ts",
        eslintrc: {
          enabled: false
          // 用于生成eslint配置
        }
      })
    ],
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        [viteEnv.VITE_API_TARGET]: {
          target: viteEnv.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
          // 路径重写
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxcdTY4NENcdTk3NjJcXFxcdml0ZS12dWUzLXRzLXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTY4NENcdTk3NjJcXFxcdml0ZS12dWUzLXRzLXRlbXBsYXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTYlQTElOEMlRTklOUQlQTIvdml0ZS12dWUzLXRzLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJyAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVWdWVBcGlcdTYzRDJcdTRFRjZcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnIC8vIGh0bWxcdTZBMjFcdTY3N0ZcdTYzRDJcdTRFRjZcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnIC8vIHN2Z1x1NTZGRVx1NjgwN1x1NjNEMlx1NEVGNlxyXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCcgLy8gXHU1QjlBXHU0RTQ5VnVlXHU3RUM0XHU0RUY2XHU1NDBEXHU3OUYwXHU2M0QyXHU0RUY2XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3Qgdml0ZUVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgLy8gXHU4M0I3XHU1M0Q2XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBiYXNlOiAnL3ZpdGUtdnVlMy10cy10ZW1wbGF0ZS8nLCAvLyBnaXRodWJcdTRFRDNcdTVFOTNcdTU0MERcdTc5RjBcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZVNldHVwRXh0ZW5kKCksXHJcbiAgICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgICAgICBpbmplY3Q6IHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6IHZpdGVFbnYuVklURV9BUFBfVElUTEUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL3N2Z0ljb25zJyldLFxyXG4gICAgICAgIHN5bWJvbElkOiAnaWNvbi1bZGlyXS1bbmFtZV0nLFxyXG4gICAgICB9KSxcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlciddLFxyXG4gICAgICAgIGR0czogJ3NyYy9hdXRvLWltcG9ydC5kLnRzJyxcclxuICAgICAgICBlc2xpbnRyYzoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vIFx1NzUyOFx1NEU4RVx1NzUxRlx1NjIxMGVzbGludFx1OTE0RFx1N0Y2RVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgW3ZpdGVFbnYuVklURV9BUElfVEFSR0VUXToge1xyXG4gICAgICAgICAgdGFyZ2V0OiB2aXRlRW52LlZJVEVfU0VSVkUsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLCAvLyBcdThERUZcdTVGODRcdTkxQ0RcdTUxOTlcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVIsU0FBUyxjQUFjLGVBQWU7QUFDL1QsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLG9CQUFvQjtBQU4zQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLFVBQVUsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDO0FBRTNDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osZUFBZTtBQUFBLE1BQ2YsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSixPQUFPLFFBQVE7QUFBQSxVQUNqQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELHFCQUFxQjtBQUFBLFFBQ25CLFVBQVUsQ0FBQyxRQUFRLFFBQVEsSUFBSSxHQUFHLHFCQUFxQixDQUFDO0FBQUEsUUFDeEQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLFFBQzdCLEtBQUs7QUFBQSxRQUNMLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQTtBQUFBLFFBQ1g7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osbUJBQW1CO0FBQUEsVUFDbkIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsQ0FBQyxRQUFRLGVBQWUsR0FBRztBQUFBLFVBQ3pCLFFBQVEsUUFBUTtBQUFBLFVBQ2hCLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

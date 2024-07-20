import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  // 主动开启热更新
  server: {
    hmr: true,
  },
});

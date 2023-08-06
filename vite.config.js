import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        // 全域引入
        additionalData: `@import "/src/assets/styles/variables.sass"`
      }
    }
  },
})
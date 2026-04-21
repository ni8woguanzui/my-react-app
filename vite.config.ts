import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 注意：这里的仓库名必须和你GitHub上的仓库名称完全一致，并且前后都带斜杠
  base: '/personal-blog/',
})
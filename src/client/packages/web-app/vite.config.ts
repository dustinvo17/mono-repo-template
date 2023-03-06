import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'development' ? 'http://localhost:4200' : 'https://your-server-url.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9999, // Đổi thành cổng bạn muốn
     // Nếu cổng bị chiếm, không tự động chuyển sang cổng khác
  },

})

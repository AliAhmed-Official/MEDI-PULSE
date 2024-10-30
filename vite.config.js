import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow access to the project's root folder
        '.',
        // Allow access to the desktop directory where testing.pdf is located
        'C:/Users/hp/Desktop',
      ]
    }
  }
})

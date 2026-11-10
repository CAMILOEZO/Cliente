import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // escucha en 0.0.0.0 para que funcione dentro de Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // necesario para hot reload con volúmenes en Windows
    },
  },
})

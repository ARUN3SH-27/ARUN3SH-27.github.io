import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change `base` to match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/arunesh-portfolio/',
})

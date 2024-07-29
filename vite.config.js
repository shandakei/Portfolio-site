import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-site/', // Ensure this matches your GitHub repo name
  plugins: [react()]
})

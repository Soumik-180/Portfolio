import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Replace '<YOUR_REPO_NAME>' with the name of your GitHub repository
  base: '/Portfolio/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // use './' if deploying to root; adjust if needed
  plugins: [react()]
});

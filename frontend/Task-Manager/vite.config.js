import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import envCompitable from "vite-plugin-env-compatible"

// https://vite.dev/config/
export default defineConfig({
  envPrefix: "API_",
  plugins: [react(), envCompitable(), tailwindcss()],
})

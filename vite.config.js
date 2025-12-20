import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),   tailwindcss()],
  theme: {
    extend: {
      fontFamily: {
        // Substitui a 'sans' padrão pela Inter
        sans: ['Inter', 'sans-serif'],
        // Cria uma classe 'font-heading' para os títulos
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        // Substitui a 'mono' padrão pela JetBrains Mono
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
})

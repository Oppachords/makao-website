import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      // This maps your custom MAKAO brand colors into Tailwind v4's engine
      theme: {
        colors: {
          'makao-blue': '#0074C4',   // Sky/Hope Blue from right figure
          'makao-pink': '#D81B60',   // Joyful Pink from left figure
          'makao-yellow': '#F4A223', // Sun/Warmth Yellow from the sun
          'makao-green': '#008A3B',  // Growth Green from the grass foundation
          'makao-dark': '#1A1A1A',   // Deep Charcoal text color
        }
      }
    })
  ],
})
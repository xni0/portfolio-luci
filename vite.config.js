import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Si usas React. Si usas Vue, cambia esto por @vitejs/plugin-vue

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-luci/', // Esto arregla el error de que solo cargue el HTML
})
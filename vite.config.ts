import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Edu-platform/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

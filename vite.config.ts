import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Aptly---Your-future-Aptly-figured-out/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

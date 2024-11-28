import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Fallback to `index.html` for SPA routes during development
    historyApiFallback: true,
  },
  build: {
    // Ensure proper SPA behavior in production
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});

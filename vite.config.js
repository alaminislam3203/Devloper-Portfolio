import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Build optimization
  build: {
    chunkSizeWarningLimit: 2000, // Increase chunk limit to 2MB
  },
});

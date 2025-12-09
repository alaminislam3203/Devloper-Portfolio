import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // নিশ্চিত করুন folder name ঠিক
    chunkSizeWarningLimit: 2000, // optional, warning দূর করতে
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // build folder (Cloudflare Pages default)
    chunkSizeWarningLimit: 2000, // warning limit 2 MB-এ বাড়ানো
  },
});

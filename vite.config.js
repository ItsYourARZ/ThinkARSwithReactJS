import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Ensure the root is set correctly
  build: {
    outDir: 'dist', // The folder to output the build files
  },
  server: {
    open: true, // Automatically open the app in the default browser on server start
  },
});

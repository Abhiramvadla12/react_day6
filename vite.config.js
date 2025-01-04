import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react_day6/', // Match your repository name
  build: {
    outDir: 'dist', // Default output directory for Vite
  },
});

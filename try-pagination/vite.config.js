import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// #doc: https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/play-react-pagination/',
});

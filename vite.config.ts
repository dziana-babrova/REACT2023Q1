import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      pages: '/src/pages',
      types: '/src/types',
      data: '/src/data',
      consts: '/src/consts',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      all: true,
      exclude: ['src/consts', 'src/types', 'src/**/*.test.tsx', 'src/vite-env.d.ts'],
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});

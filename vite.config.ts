import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      pages: '/src/pages',
      types: '/src/types',
      data: '/src/data',
      consts: '/src/consts',
      services: '/src/services',
      reducers: '/src/reducers',
      state: '/src/state',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTests.ts'],
    coverage: {
      all: true,
      enabled: true,
      exclude: ['src/consts', 'src/types', 'src/**/*.test.tsx', 'src/vite-env.d.ts'],
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/consts/vars.scss";',
      },
    },
  },
});

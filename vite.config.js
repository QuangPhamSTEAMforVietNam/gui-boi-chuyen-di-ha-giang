import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: process.env.NODE_ENV === 'production' ? '/gui-boi-chuyen-di-ha-giang/' : '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        hanoi: './hanoi.html',
      },
    },
  },
});

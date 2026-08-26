import { defineConfig } from 'vite';

// GitHub Pages cần base path, Netlify/Cloudflare thì không
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  root: '.',
  base: isGitHubPages ? '/gui-boi-chuyen-di-ha-giang/' : '/',
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

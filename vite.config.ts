import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, type Plugin } from 'vite';

const rootDirectory: string = dirname(fileURLToPath(import.meta.url));
const repositoryName: string = 'minigames';

const githubPagesSpaFallback = (): Plugin => ({
  name: 'github-pages-spa-fallback',
  closeBundle(): void {
    const distDirectory: string = resolve(rootDirectory, 'dist');
    const indexFile: string = join(distDirectory, 'index.html');
    const fallbackFile: string = join(distDirectory, '404.html');

    if (existsSync(indexFile)) {
      copyFileSync(indexFile, fallbackFile);
    }
  },
});

export default defineConfig({
  base: `/${repositoryName}/`,
  plugins: [githubPagesSpaFallback()],
  resolve: {
    alias: {
      '@': resolve(rootDirectory, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(rootDirectory, 'src')],
      },
    },
  },
});

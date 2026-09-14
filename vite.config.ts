import { copyFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, type Plugin } from 'vite';

const rootDirectory: string = path.dirname(fileURLToPath(import.meta.url));
const repositoryName: string = 'minigames';

const githubPagesSpaFallback = (): Plugin => ({
  name: 'github-pages-spa-fallback',
  closeBundle(): void {
    const distributionDirectory: string = path.resolve(rootDirectory, 'dist');
    const indexFile: string = path.join(distributionDirectory, 'index.html');
    const fallbackFile: string = path.join(distributionDirectory, '404.html');

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
      '@': path.resolve(rootDirectory, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(rootDirectory, 'src')],
      },
    },
  },
});

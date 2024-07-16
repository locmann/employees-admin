import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      api: '/src/api',
      assets: '/src/assets',
      context: '/src/context',
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      types: '/src/types',
      ui: '/src/ui',
      store: '/src/store',
      entities: '/src/entities',
      widgets: '/src/widgets',
      shared: '/src/shared',
    },
  },
});

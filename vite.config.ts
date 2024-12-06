import path from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import eslintPlugin from 'vite-plugin-eslint';

import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'package.json': path.resolve(__dirname, 'package.json'),
    },
  },
  plugins: [
    preact(),
    eslintPlugin({
      include: [
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      fix: true,
    }),
    cssInjectedByJsPlugin(),
  ],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
    cssCodeSplit: false,
    minify: 'esbuild',
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
});

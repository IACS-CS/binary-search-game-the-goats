import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  build: {
    target: "esnext",
    minify: false     // Disables minification
  },
  server: {
    host: '0.0.0.0'
  }
});

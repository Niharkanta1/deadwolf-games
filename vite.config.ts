import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        blog: resolve(import.meta.dirname, "blog.html"),
      },
    },
  },
  base: "/",
});

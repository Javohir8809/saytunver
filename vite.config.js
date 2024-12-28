import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/",
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "https://api.samdukf.uz",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: "dist",
  },
  preview: {
    hmr: false, // Отключаем HMR в продакшн
  },
}));

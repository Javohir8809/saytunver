import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://172.16.0.11:8000", // Ваш сервер
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Удалить /api из пути
      },
    },
  },
});

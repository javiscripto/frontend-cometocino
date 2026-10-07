import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: ["107c-200-126-70-223.ngrok-free.app"],
    proxy: {
      "/api/v1/": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});

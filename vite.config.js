import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//traer url backend desde .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true,
    proxy: {
      "/api/v1": {
        target: "https://cometocino-backend.onrender.com",
        changeOrigin: true,
        secure: false,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    },
  },
});

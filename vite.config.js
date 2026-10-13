import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//traer url backend desde .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: true, // permitir acceso desde cualquier dominio ngrok-free
    proxy: {
      ["/api/v1/"]: {
        target: "http://localhost:3000/",
        changeOrigin: true,
      },
    },
  },
});

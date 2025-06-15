import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ufest/",
  plugins: [
    tailwindcss(),
    solid(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      // Remove base from PWA config - let Vite handle it
      manifestFilename: "manifest.webmanifest",
      scope: "/ufest/",

      pwaAssets: {
        disabled: false,
        config: true,
        overrideManifestIcons: true,
      },

      manifest: {
        name: "UFestival App",
        short_name: "UFest",
        description: "Example Desc",
        theme_color: "#ffffff",
        display: "fullscreen",
        start_url: "/ufest/",
        scope: "/ufest/",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallback: "/ufest/index.html",
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});

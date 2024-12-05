import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  return {
    base: command === "serve" ? "/" : "/knotenLayout/",
    plugins: [
      preact({
        prerender: {
          enabled: true,
          renderTarget: "#app",
        },
      }),
    ],
  };
});

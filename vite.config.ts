import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      stories: path.resolve(__dirname, "src/stories"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
});

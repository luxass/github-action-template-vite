import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    target: "node24",
    ssr: true,
    rollupOptions: {
      input: ["src/index.ts"],
      output: {
        entryFileNames: "index.mjs",
        format: "esm",
        exports: "auto",
      },
    },
  },
  ssr: {
    // Anything NOT 'node:' will be bundled.
    noExternal: /^(?!node:)/,
  },
});

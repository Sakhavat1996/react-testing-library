/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    globals: true,
    // Testlərin özünü exclude etmək üçün:
    exclude: ["**/node_modules/**", "**/dist/**", "./temp/**"],

    // Coverage üçün xüsusi tənzimləmə:
    coverage: {
      provider: "v8", // və ya 'istanbul'
      exclude: [
        "src/assets/**", // assets qovluğunu çıxarır (react.svg bura daxildir)
        "**/*.css", // bütün CSS fayllarını çıxarır (app.css bura daxildir)
        "src/main.tsx", // adətən render funksiyası olduğu üçün test edilmir
        "src/vite-env.d.ts",
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        statements: -10,
        functions: 80,
      },
    },
  },
});

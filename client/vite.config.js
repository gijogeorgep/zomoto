import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mobile: resolve("src/pages", "mobile.html"),
        login: resolve("src/pages", "login.html"),
        signup: resolve("src/pages", "signup.html"),
      },
    },
  },
});

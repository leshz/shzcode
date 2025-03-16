import { mergeConfig } from "vite";
import prismjs from "vite-plugin-prismjs";

export default (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [
      prismjs({
        languages: "all", // Load all languages or customize as needed
      }),
    ],
  });
};
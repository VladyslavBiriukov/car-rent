// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [react()],
//     base: "/",
//     css: {
//       preprocessorOptions: {
//         scss: {
//           additionalData: '@import "./src/styles/_shared.scss";',
//         },
//       },
//     },
//   };
//   if (command !== "serve") {
//     config.base = "/car-rent/";
//   }
//   return config;
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        pages: '/src/pages',
        services: '/src/services',
        styles: '/src/styles',
        images: '/src/images',
        assets: '/src/assets',
        data: '/src/data',
      },
    },
    plugins: [react()],
  };

  if (command !== 'serve') {
    config.base = '/car-ren/';
  }

  return config;
});
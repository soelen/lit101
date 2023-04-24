import { defineConfig } from 'vite';
import * as path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {

        main: './src/main.ts',
        react: './src/react.ts',
      },
      formats: ['es', 'cjs', ],
    },
    outDir: 'dist',
    rollupOptions: {
      // input: [
      //   path.resolve( './src/main.ts' ),
      //   path.resolve( './src/react.ts' ),
      // ],
      output: {
        chunkFileNames: 'chunks/[name].[format].js',
        entryFileNames : '[name].[format].js',
        // manualChunks: undefined,
      },

      plugins: [],


      // external: /^lit/
    }
  }
})

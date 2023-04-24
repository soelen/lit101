import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  css: {

  },

  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: {
        entryFileNames : '[name].[format].js',
      },
      plugins: [],


      // external: /^lit/
    }
  }
})

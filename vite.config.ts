import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      input: {
        widget: './src/main.tsx',
      },
      output: {
        entryFileNames: 'entry-[name].js',
      },
    },
    // lib: {
    //   entry: './src/main.tsx',
    //   name: 'test-main',
    //   fileName: 'test-main',
    //   formats: ['es'],
    // },
  },
});

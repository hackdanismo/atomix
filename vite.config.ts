import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es' ? 'index.js' : 'index.cjs',
    },

    rolldownOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
  },
})
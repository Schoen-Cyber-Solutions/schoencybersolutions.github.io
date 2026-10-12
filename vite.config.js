import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (path) => fileURLToPath(new URL(`./${path}`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: page('index.html'),
        'student-app': page('student-app/index.html'),
        'student-app/privacy': page('student-app/privacy/index.html'),
        'student-app/terms': page('student-app/terms/index.html'),
        'student-app/community-guidelines': page('student-app/community-guidelines/index.html'),
        'student-app/support': page('student-app/support/index.html'),
      },
    },
  },
})

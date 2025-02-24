import { defineConfig } from 'vite'

export default defineConfig({
   server: {
      port: 3001,
      open: true,
   },
   base: '/gsap_study/',
   build: {
      outDir: 'dist',
   },
})

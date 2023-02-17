import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: 'https://gfortiching.github.io/vite-portfolio/',
    plugins: [react()]
})
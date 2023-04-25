import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [imagetools(), svgr(), react()],
})

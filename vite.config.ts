import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

const root = import.meta.dirname


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(root, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    figmaAssetResolver(),
    imagetools(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(root, './src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(root, 'index.html'),
        'about-us': path.resolve(root, 'about-us/index.html'),
        contact: path.resolve(root, 'contact/index.html'),
        portfolio: path.resolve(root, 'portfolio/index.html'),
        'portfolio-1': path.resolve(root, 'portfolio/portfolio-1/index.html'),
        'portfolio-2': path.resolve(root, 'portfolio/portfolio-2/index.html'),
        services: path.resolve(root, 'services/index.html'),
        'service-1': path.resolve(root, 'services/service-1/index.html'),
        'service-2': path.resolve(root, 'services/service-2/index.html'),
        blog: path.resolve(root, 'blog/index.html'),
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

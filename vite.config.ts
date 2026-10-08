import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'about-us': path.resolve(__dirname, 'about-us/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        portfolio: path.resolve(__dirname, 'portfolio/index.html'),
        'portfolio-1': path.resolve(__dirname, 'portfolio/portfolio-1/index.html'),
        'portfolio-2': path.resolve(__dirname, 'portfolio/portfolio-2/index.html'),
        services: path.resolve(__dirname, 'services/index.html'),
        'service-1': path.resolve(__dirname, 'services/service-1/index.html'),
        'service-2': path.resolve(__dirname, 'services/service-2/index.html'),
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

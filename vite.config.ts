import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    autoImport(
      {
        imports: [
          'vue',
        ]
      }
    ),
    UnoCSS({
      presets: [
        presetUno(), presetAttributify(), presetIcons(),
      ]
    }),
  ],
})

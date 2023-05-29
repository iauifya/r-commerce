import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//elementPlus按需導入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // ...
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [
                //1.配置elementPlus採用sass樣式配色系統
                ElementPlusResolver({ importStyle: "sass" })

            ],
        }),
    ],
    resolve: {
        //實際的路徑轉換 @ -> src
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                //2. 自動導入定制化文件進行樣式覆蓋
                additionalDate: ` @use "@/styles/_var.scss"; `,
                //additionalData: `$injectedColor: orange;`, //這個是有成功的，路徑應該也是對的，不知道為何會沒作用
            }

        }
    }
})
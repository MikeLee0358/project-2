import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from '@/App.vue'

const pinia = createPinia()
const app = createApp(App)

app.directive('id', {
        /** v-id 轉換插件 */
        mounted(el, binding) {
            if (['', 'app', '__nuxt'].includes(el.parentElement.id)) el.id = binding.value // 保持原樣
            else el.id = `${el.parentElement.id}__${binding.value}` // 轉換 類BEM風格
        }
    })
    .use(pinia)
    .mount('#app')


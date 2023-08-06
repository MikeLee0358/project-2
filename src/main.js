// @ts-nocheck
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'modern-normalize'
import App from '@/App.vue'
const pinia = createPinia()
const app = createApp(App)

app.directive('id', {
        // 全域 v-id的自製插件
        mounted(el, binding) {
            // 父節點id 為空值, #app(vue3的根元素)、#__nuxt3(nuxt3的根元素)時，不做id轉換
            if (['', 'app', '__nuxt'].includes(el.parentElement.id)) return

            el.id = `${el.parentElement.id}__${binding.value}`
        }
    })
    .use(pinia)
    .mount('#app')


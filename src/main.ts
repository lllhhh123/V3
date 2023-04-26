import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const Mit= mitt()

const app = createApp(App)

declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit//获取Mit所有的类型
    }
}

app.config.globalProperties.$Bus = Mit

app.mount('#app')

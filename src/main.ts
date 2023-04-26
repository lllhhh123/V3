import { createApp } from 'vue'
import App from './App.vue'

import Loading from './components/Loading'
import mitt from 'mitt'

const Mit= mitt()

const app = createApp(App)

app.use(Loading)


app.config.globalProperties.$env = 'dev'

app.config.globalProperties.$filters = {
    format<T>(str:T){
        return `asd-${str}`
    }
}
type Filter = {
    format<T>(str:T):string
}

declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit//获取Mit所有的类型
        $filters: Filter,
        $env:string
    }
}

app.config.globalProperties.$Bus = Mit

app.mount('#app')


type Lod = {
    show:() => void,
    hide:() => void
}
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $loading: Lod
    }
}

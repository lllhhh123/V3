import type {App,VNode} from 'vue'
import Loading from './index.vue'
import {createVNode,render} from 'vue'
export default{
    install (app:App){
        const Vnode:VNode = createVNode(Loading)
        render(Vnode,document.body)
        app.config .globalProperties.$loading = {
            show:Vnode.component?.exposed?.show,
            hide:Vnode.component?.exposed?.hide
        }

        app.config.globalProperties.$loading.show()
        console.log(app,123,Vnode.component?.exposed);
        
    }
}
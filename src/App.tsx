// 返回一个渲染函数
// export default function(){
//     return (<div>asc</div>)
// }

// optionsApi
// import { defineComponent } from "vue";
// export default defineComponent({
//     data(){
//         return{
//             name:'123'
//         }
//     },
//     render(){
//         return(<div>{this.name}</div>)
//     }
// })

// setup 函数模式
// v-show 支持
// ref 在template中会自动解包。value 在tsx中并不会，需要在值的后面加上。value
//v-if 不支持，需要改用三元表达式
// 用map去代替v-for
interface Props {
    name?: string
}
import { defineComponent, ref } from "vue";
export default defineComponent({
    props: {
        name: String
    },
    emits: ['on-click'],
    setup(props: Props, {emit}) {//emit是属于setup的第二个参数，记得使用花括号{}将emit圈起来
        console.log(props.name);
        const v = ref<string>("")
        const flag = ref(false)
        const data = [
            {
                name: "a"
            },
            {
                name: "b"
            },
            {
                name: "c"
            }
        ]
        const fn = (item:any)=> {
            console.log("触发了", item)
            emit('on-click', item)
        }
        return () => (
        <>
            <div>props:{props?.name}</div>
            <hr />
            {data.map(v => {
                return <div onClick={() => fn(v)}>{v.name}</div>
            })}
            <hr />
            <input type="text" v-model={v.value} />
            <div>{v.value}</div>
        </>
        )
    }
})









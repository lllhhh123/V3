<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item,index) in data">
                <slot :index="index" :data="item"></slot>
            </div>
            
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>

    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
type names = {
    name: string,
    age: number
}
const data = reactive<names[]>([{
    name: 'asd',
    age: 20
},
{
    name: 'asdf',
    age: 202
},
{
    name: 'asdfg',
    age: 2020
}, {
    name: 'asdfgh',
    age: 20202
},
])
</script>
<style scoped lang='less'>
.header {
    height: 200px;
    background-color: red;
    color: #fff;
}

.main {
    height: 200px;
    background-color: blue;
    color: #fff;
}

.footer {
    height: 200px;
    background-color: greenyellow;
    color: #fff;
}
</style>

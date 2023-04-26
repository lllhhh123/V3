<template>
    <div>
		<h1>我是B</h1>
    </div>
</template>

<script setup lang="ts">
	import {getCurrentInstance} from 'vue'
    const instance = getCurrentInstance()
    instance?.proxy?.$Bus.on('on-xm',(str)=>{
        console.log(str,"...........B")
    })
</script>

<style scoped>

</style>
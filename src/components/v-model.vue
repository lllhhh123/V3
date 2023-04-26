<template>
  <div v-if="modelValue" class="model">
  <div class="close"><button @click="close">关闭</button></div>
  <h3>我是v-model子组件dialog</h3>
  <div>内容： <input type="text"></div>
  </div>
</template>

<script setup lang="ts">

import { ref,reactive } from 'vue';

defineProps<{
    modelValue:boolean
}>()
const emit = defineEmits(['update:modelValue'])
const close = ()=>{
    emit('update:modelValue',false)
}
</script>
<style scoped lang='less'>
</style>
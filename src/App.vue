<template>
<div></div>

</template>
  
<script setup lang='ts'>
import {ref,reactive,getCurrentInstance} from 'vue'

const instance = getCurrentInstance()

instance?.proxy?.$loading.show()

setTimeout(() => {
  instance?.proxy?.$loading.hide()
}, 5000);
</script>
  
<style lang="less">
*{
  padding:0;
  margin:0;
}
</style>
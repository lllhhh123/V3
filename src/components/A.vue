<template>
    <div class="A">
      <h1>A组件</h1>
    </div>
</template>
  
<script setup lang="ts">
import { useAttrs } from 'vue';
  let attr = useAttrs()
  console.log(attr);
  
</script>
  
<style scoped>
  .A{
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
  }
</style>
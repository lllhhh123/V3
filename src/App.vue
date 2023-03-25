<template>
  <div>
    <Dialog>
      <template #header> <!-- v-slot:  可以被简写为#-->
          <div>
              asd
          </div>
      </template>
      <template #default="{data,index}">   <!-- 在template中v-slot 可以被简写为#default-->
          <div>
              {{data.name}} --{{ data.age }} --{{ index }}
          </div>
      </template>
      <template v-slot:footer>
          <div>
              asdfghjkl
          </div>
      </template>
    </Dialog>
  </div>
</template>
<script setup lang="ts">

import { reactive } from 'vue';
import Dialog from '../src/layout/index.vue'
</script>
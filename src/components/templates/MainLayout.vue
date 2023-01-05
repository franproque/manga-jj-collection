<template>
  <div class="main w-screen h-screen">
    <HeaderComponentVue v-if="showHeader" />
    <slot/>
  </div>
</template>

<script setup>
import HeaderComponentVue from '../Menu/HeaderComponent.vue'
import { showHeader } from '../../js/controllers-ref/show-header.js'
console.log(showHeader)
</script>
<style scoped>
.main {
  position: relative;
  background-color:#FFFF ;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-height: 100%;
}
</style>

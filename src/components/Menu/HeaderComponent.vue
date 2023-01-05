<template>
    <header class="w-full menu ">
      <img src="../../assets/Vector.png" alt="Menu" @click="mangaApiService.loggout()">
    </header>
</template>
<script setup>
import { MangaApiService } from '../../js/services/manga-api.service.js'
const mangaApiService = new MangaApiService()
</script>
<style scoped>
.menu{
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  margin-right: 2rem;
  padding-left: 3rem;
}
</style>

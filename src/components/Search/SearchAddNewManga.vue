<template>
  <main class="model-search" >
      <header class="header">
        <div>
          <img src="../../assets/material-symbols_close.png" alt="" @click="handleShowSearchAddNewManga(false)">
        </div>
      </header>
      <div class="search-main">
        <div class="search-main-input">
          <img src="../../assets/Search.png" alt="">
          <input type="text" placeholder="Search" @keyup.enter="handleListAddmanga" v-model="inputSearch">
        </div>

        <ul class="search-main-list">
          <li v-for="item of listAddmanga" :key="item.id" @click="toMangaDatail(item.id)">
            <div>
              <img :src="item.image" alt="">
            </div>
            <h3>{{ item.title }} <span>({{ item.volumes }})</span></h3>
          </li>

        </ul>
      </div>
    </main>
</template>

<script setup>
import { handleShowSearchAddNewManga, listAddmanga, handleListAddmanga, inputSearch } from '../../js/controllers-ref/show-search-add-new-manga.js'
import { useRouter } from 'vue-router'
const router = useRouter()
function toMangaDatail (id) {
  router.push({ name: 'manga-detail', params: { id: id } })
}
</script>
<style scoped>
.model-search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  max-height: auto;
  background-color: rgba(0, 0, 0, 0.83);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.model-search .header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 2rem;
  padding-top: 2rem;
}
.model-search .search-main {
  width:70%;
  height: 50%;
  margin-top: 10rem;
}

.model-search .search-main-input {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.8rem;
  background-color: rgba(255, 255, 255, 0.51);
  padding-left: 1rem;
  align-items: center;
  border-bottom: 0.2rem solid white;
}

.model-search .search-main-input input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: white;
  padding-left: 1rem;
  outline: 0;
}
.model-search .search-main-input input::placeholder {
  color: white;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}

.model-search .search-main-list {

  margin-top: 2rem;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 1);
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
}

.model-search .search-main-list li {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10rem;
  align-items: center;
  padding: 0 1rem;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.model-search .search-main-list li div {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.85);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.model-search .search-main-list li h3 {

  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Roboto Condensed', sans-serif;
  color: #252525;
  margin-left: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  width: 100%;
}
</style>

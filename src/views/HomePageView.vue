<template class="template-style">
    <main class="main-items wrapper-local">
        <div class="search-main-input">
          <img src="../assets/Search.png" alt="">
          <input type="text" placeholder="Search" v-model="inputSearch" @input="handleListCollectionManga">
        </div>
      <div class="meus-mangas-div">
        <h1>My Mangas</h1>
        <ul class="lista-mangas">
          <li class="lista-mangas-item" v-for="item in collections" :key="item.id" @click="mangaDetalhes(item.id,item.manga.id)">

            <div>
              <img :src="item.manga.image" alt="">
            </div>
            <h3>{{ item.manga.title }} <span> ({{item.volumes.length }}/{{ item.manga.volumes }})</span></h3>
          </li>

        </ul>

        <div class="flooat-button fundo-padrao" @click="handleShowSearchAddNewManga(true)" >
          <img src="../assets/plus.png" alt="">
        </div>
      </div>
    </main>
    <SearchAddNewMangaVue v-if="showSearchAddNewManga" />
</template>
<script setup>

import { handleShowSearchAddNewManga, showSearchAddNewManga } from '../js/controllers-ref/show-search-add-new-manga.js'
import { inputSearch, handleListCollectionManga } from '../js/controllers-ref/show-search.js'

import SearchAddNewMangaVue from '../components/Search/SearchAddNewManga.vue'
import { collections, loadCollections } from '../js/controllers-ref/manga-collection'
import { useRouter } from 'vue-router'
const router = useRouter()
loadCollections()
showSearchAddNewManga.value = false
function mangaDetalhes (id, mangaId) {
  router.push({ name: 'manga-detail', params: { id: mangaId }, query: { collectionId: id } })
}

/* function enableOrDisableSearch () {
  const valorSearch = showSearch.value
  handleShowSearch(!valorSearch)
} */

</script>
<style scoped>
.wrapper-local {
    margin: 0 auto;
    width: 90%;
    position: relative;
}

.main-items{
  margin-top: 3rem;
  min-height: 80%;
  height: auto;
  overflow: auto;
}
.flooat-button {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;
}

.flooat-button:hover {
  transform: scale(1.1);
}
.buttons-div-home {
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 4.8rem;
  justify-content: space-evenly;
}
.button-home {
  background-color: #252525;
  height: 100%;
  width: 45%;
  color:#FFFF ;
  font-size: 1.5rem;
  border-radius: 2rem;
  border:none;
  font-family: 'Roboto Condensed', sans-serif;

}
.meus-mangas-div {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 1.5rem;
}

.meus-mangas-div h1 {
  width: 100%;
  padding-left: 3rem;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #252525;
}
.lista-mangas {
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
.lista-mangas-item {
  display:flex;
  flex-direction: column;
  width: 45%;
  transform: scale(0.9);
  align-items: center;
  transition: transform 0.5s;
}

.lista-mangas-item:hover {
  transform: scale(1);
}

.lista-mangas-item div {
  width: 100%;
  border-radius: 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.lista-mangas-item div img {
  border-radius: 2rem;
}

.lista-mangas-item h3 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  font-family: 'Roboto Condensed', sans-serif;
  color: #252525;
  margin-top: 1rem;
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  width: 100%;
}

 .search-main-input {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4.8rem;
  background-color: rgba(255, 255, 255, 0.51);
  padding-left: 1rem;
  align-items: center;
  border-bottom: 0.2rem solid rgb(255, 204, 0,0.5);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60));
}

.search-main-input input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: black;
  padding-left: 1rem;
  outline: 0;
}
.search-main-input input::placeholder {
  color: white;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
}
</style>

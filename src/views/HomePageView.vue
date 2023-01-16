<template class="template-style">
    <main class="main-items wrapper-local">
      <div class="buttons-div-home">
        <button class="button-home" @click="handleShowSearchAddNewManga(true)">Add new manga</button>
        <button class="button-home" @click="enableOrDisableSearch">Search</button>
      </div>
      <div class="meus-mangas-div">
        <h1>My Mangas</h1>
        <ul class="lista-mangas">
          <li class="lista-mangas-item" v-for="item in collections" :key="item.id" @click="mangaDetalhes(item.id,item.manga.id)">

            <div>
              <img :src="item.manga.image" alt="">
            </div>
            <h3>{{ item.manga.title }} <span>(20/{{ item.manga.volumes }})</span></h3>
          </li>

        </ul>
      </div>
    </main>
    <SearchAddNewMangaVue v-if="showSearchAddNewManga" />
    <SearchMyMangaVue v-if="showSearch" />
</template>
<script setup>

import { showSearch, handleShowSearch } from '../js/controllers-ref/show-search.js'
import { handleShowSearchAddNewManga, showSearchAddNewManga } from '../js/controllers-ref/show-search-add-new-manga.js'
import SearchAddNewMangaVue from '../components/Search/SearchAddNewManga.vue'
import SearchMyMangaVue from '../components/Search/SearchMyManga.vue'
import { collections, loadCollections } from '../js/controllers-ref/manga-collection'
import { useRouter } from 'vue-router'
const router = useRouter()
loadCollections()

function mangaDetalhes (id, mangaId) {
  router.push({ name: 'manga-detail', params: { id: mangaId }, query: { collectionId: id } })
}

function enableOrDisableSearch () {
  const valorSearch = showSearch.value
  handleShowSearch(!valorSearch)
}

</script>
<style scoped>
.wrapper-local {
    margin: 0 auto;
    width: 90%;
}

.main-items{

  margin-top: 3rem;
  min-height: 80%;
  height: auto;
  overflow: auto;
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
  justify-content: center;
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

</style>

<template>
  <main class="model-search" >
      <header class="header">
        <div @click="handleShowSearch(false)">
          <img src="../../assets/material-symbols_close.png" alt="">
        </div>
      </header>
      <div class="search-main">
        <div class="search-main-input">
          <img src="../../assets/Search.png" alt="">
          <input type="text" placeholder="Search" v-model="inputSearch" @input="handleListCollectionManga">
        </div>
      </div>
    </main>
</template>
<script setup>
import { handleShowSearch, inputSearch, handleListCollectionManga } from '../../js/controllers-ref/show-search.js'
handleListCollectionManga()
</script>
<style scoped>
.model-search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
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
</style>

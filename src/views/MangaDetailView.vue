<template>
  <header class="header">
    <div @click="voltar">
      <img src="../assets/eva_arrow-back-fill.png" alt="">
    </div>
      <h1>Naruto (20/72)</h1>
  </header>
  <main class="manga">
    <div class="manga-image">
    </div>
    <div class="wrapper-local informacoes">
      <p class="descricao">
        Whenever Naruto Uzumaki proclaims that he will someday become the Hokage—a title bestowed upon the best ninja in the Village Hidden in the Leaves—no one takes him seriously. Since birth, Naruto has been shunned and ridiculed teste lkasklçassadsad
      </p>

      <ul class="tipos wrapper-local">
        <li class="fundo-padrao">Sounen</li>
        <li class="fundo-padrao">Ninja</li>
        <li class="fundo-padrao">Fight</li>
      </ul>
    </div>

    <div class="titulo-filtro-volumes-main">
      <div class="titulo-filtro">
        <h2>Volumes</h2>

        <div>
          <img src="../assets/Filter.png" alt="">
          <p>Filter</p>
        </div>
      </div>

      <ul class="lista-volumes">
        <li class="volume-item">
          <div class="tumb-titulo">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Volume #1</h3>
          </div>
          <div class="checkbox">
            <input type="checkbox">
          </div>
        </li>
        <li class="volume-item">
          <div class="tumb-titulo">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Volume #1</h3>
          </div>
          <div class="checkbox">
            <input type="checkbox">
          </div>
        </li>
        <li class="volume-item">
          <div class="tumb-titulo">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Volume #1</h3>
          </div>
          <div class="checkbox">
            <input type="checkbox">
          </div>
        </li>
        <li class="volume-item">
          <div class="tumb-titulo">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Volume #1</h3>
          </div>
          <div class="checkbox">
            <input type="checkbox">
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function voltar () {
  router.push({ name: 'home-page' })
}

</script>
<style scoped>
  .wrapper-local {
    width: 95%;
  }
  .main {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2rem;
    padding: 0 1.5rem;
    width: 100%;
    height: 7rem;
  }
  .header div {
    width: 5rem;
  }
  .header  h1 {
    font-size: 2rem;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    margin:0 auto;
  }

  .manga {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    min-height: 90%;
    height: auto;
  }

  .manga .manga-image{
    width: 100%;
    height: 35%;
    min-height: 35%;
    background-image: url('../assets/naruto-tumb.jpg');
    background-size: cover;
  }
  .manga .informacoes {
    margin-top: 2rem;
    text-align: justify;

  }
.manga .informacoes .descricao {
  width: 100%;
  height: auto;

  padding: 0 1.5rem;
  font-size: 1.7rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;

  /* Limitar o número de linhas em 4 */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

}

.manga .informacoes .tipos {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 2rem;
  width: 100%;
  height: 4rem;
  list-style: none;
  padding: 0;
}

.manga .informacoes .tipos li {
  width: 30%;
  height: 100%;
  color: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0.1rem solid rgba(0, 0, 0, 1) ;
  font-size: 1.5rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}

.manga .titulo-filtro-volumes-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  margin-top: 2rem;
}

.manga .titulo-filtro-volumes-main .titulo-filtro {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
}

.manga .titulo-filtro-volumes-main .titulo-filtro h2 {
  font-size: 2.2rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.manga .titulo-filtro-volumes-main .titulo-filtro div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.manga .titulo-filtro-volumes-main .titulo-filtro div img {
  width: 2rem;
  height: 2rem;
}

.manga .titulo-filtro-volumes-main .titulo-filtro div p {
  font-size: 1.9rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  margin-left: 0.5rem;
  color:rgba(166, 166, 166, 1);
}

.manga .titulo-filtro-volumes-main .lista-volumes {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  list-style: none;
  padding: 0;
  min-height: 100%;
  height: auto;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 0 1.5rem;
  margin-top: 1rem;
  border-bottom: 0.1rem solid rgba(166, 166, 166, 1);
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .tumb-titulo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 60%;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .tumb-titulo div {
  width: 20%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .tumb-titulo div img {
  width: 100%;
  height: 100%;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .tumb-titulo h3 {
  font-size: 1.8rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  margin-left: 1rem;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .checkbox{
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .checkbox input {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(166, 166, 166, 1);
}
.manga .titulo-filtro-volumes-main .lista-volumes .volume-item .checkbox input:checked {
  background-color: #FFCC00;
}
</style>

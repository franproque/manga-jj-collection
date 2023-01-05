<template>
  <div class="main w-screen h-screen">
    <header class="w-full menu ">
      <img src="../assets/Vector.png" alt="Menu">
    </header>
    <main class="main-items wrapper-local">
      <div class="buttons-div-home">
        <button class="button-home">Add new manga</button>
        <button class="button-home">Search</button>
      </div>
      <div class="meus-mangas-div">
        <h1>My mangas</h1>
        <ul class="lista-mangas">
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li class="lista-mangas-item">
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
        </ul>
      </div>
    </main>
    <main class="model-search">

      <div class="search-main">
        <div class="search-main-input">
          <img src="../assets/Search.png" alt="">
          <input type="text" placeholder="Search">
        </div>

        <ul class="search-main-list">
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
          <li>
            <div>
              <img src="../assets/naruto-tumb.jpg" alt="">
            </div>
            <h3>Naruto <span>(20/72)</span></h3>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style scoped>
.wrapper-local {
    margin: 0 auto;
    width: 90%;
}
.main {
  position: relative;
  background-color:#FFFF ;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-height: 100%;
}
.main-items{

  margin-top: 3rem;
  min-height: 80%;
  height: auto;
  overflow: auto;
}
.menu{
  display: flex;
  justify-content: flex-start;
  margin-top: 4rem;
  margin-right: 2rem;
  padding-left: 3rem;
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
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 2rem;
  border:none;
  font-family: 'Roboto', sans-serif;

}
.meus-mangas-div {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-top: 3rem;
}

.meus-mangas-div h1 {
  width: 100%;
  padding-left: 3rem;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #252525;
}
.lista-mangas {
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.lista-mangas-item {
  display:flex;
  flex-direction: column;
  width: 50%;
  transform: scale(0.85);
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
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #252525;
  margin-top: 2rem;
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  width: 100%;
}

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
  display: none;
  flex-direction: column;
  align-items: center;
}

.model-search .search-main {
  width:70%;
  height: 50%;
  margin-top: 30rem;
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

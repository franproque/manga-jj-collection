import { ref } from 'vue'
import { MangaApiService } from '../services/manga-api.service'
const mangaApiService = new MangaApiService()
const showSearchAddNewManga = ref(false)
function handleShowSearchAddNewManga (value) {
  showSearchAddNewManga.value = value
  inputSearch.value = ''
}
const inputSearch = ref('')
const listAddmanga = ref([])
function handleListAddmanga () {
  console.log(inputSearch.value)
  mangaApiService.getMangaList(1, 50, inputSearch.value).then((response) => {
    console.log(response.data.data.data.data)

    listAddmanga.value = response.data.data.data.data
  })
}
export {
  listAddmanga,
  showSearchAddNewManga,
  handleShowSearchAddNewManga,
  handleListAddmanga,
  inputSearch
}

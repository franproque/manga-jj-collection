import { ref } from 'vue'
import { MangaApiService } from '../services/manga-api.service'
import { collections } from '../controllers-ref/manga-collection'
const mangaApiService = new MangaApiService()
const showSearch = ref(false)
function handleShowSearch (value) {
  showSearch.value = value
}

const inputSearch = ref('')
const listCollectionManga = ref([])
function handleListCollectionManga () {
  mangaApiService.getCollection(1, 50, inputSearch.value).then((response) => {
    console.log(response.data.data.data.data)

    collections.value = response.data.data.data.data
  })
}
export {
  showSearch,
  handleShowSearch,
  handleListCollectionManga,
  inputSearch,
  listCollectionManga
}

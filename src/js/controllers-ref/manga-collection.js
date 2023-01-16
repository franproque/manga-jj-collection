import { ref } from 'vue'
import { MangaApiService } from '../services/manga-api.service'

const mangaApiService = new MangaApiService()

const collections = ref([])

const loadCollections = async (page, limit, search) => {
  const response = await mangaApiService.getCollection(page, limit, search)
  if (response.success) {
    console.log(response.data.data.data.data)
    collections.value = response.data.data.data.data
  }
}

export {
  collections,
  loadCollections
}

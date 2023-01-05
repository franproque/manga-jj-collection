import { MangaApi } from '../repository/manga-api.repository'
import { CacheService } from './cache.service'
import { useRouter } from 'vue-router'

export class MangaApiService {
  constructor () {
    this.mangaApi = new MangaApi()
    this.cacheService = new CacheService()
    this.router = useRouter()
  }

  async login (username, password) {
    const response = await this.mangaApi.login(username, password)
    if (response.success) {
      this.cacheService.set('token', response.data.token)
    }
    return response
  }

  async createUser (name, email, password) {
    const response = await this.mangaApi.createUser(name, email, password)
    return response
  }

  async getMangaList (page, limit, search) {
    const url = `/manga?page=${page}&limit=${limit}`

    if (search) {
      return await this.mangaApi.getMangaList(url + `&title=${search}`)
    }
    return await this.mangaApi.getMangaList(url)
  }

  async loggout () {
    this.cacheService.clear()
    this.router.push({ name: 'login' })
  }
}

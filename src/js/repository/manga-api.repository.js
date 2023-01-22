
import { BaseRepository } from './base-repository'
export class MangaApi extends BaseRepository {
  constructor () {
    super(/* 'https://mangajj.jjeanjacques.com' */'http://api.mangajj.sandbox.inf.br')
  }

  async cadastrar (email, password, name) {
    return await this.requestApi('post', '/users', {
      'Content-Type': 'application/json'
    }, {
      email,
      senha: password,
      nome: name
    })
  }

  async login (username, password) {
    return await this.requestApi('post', '/authentication', {
      'Content-Type': 'application/json'
    }, {
      email: username,
      senha: password
    })
  }

  async createUser (name, email, password) {
    return await this.requestApi('post', '/user/register', {
      'Content-Type': 'application/json'
    }, {
      name,
      email,
      password
    })
  }

  async getMangaList (token, page = 1, limit = 50, search) {
    const url = `/mangas?page=${page}&limit=${limit}`

    if (search) {
      return await this.requestApi('get', url + `&search=${search}`, {
        Authorization: `Bearer ${token}`
      })
    }
    return await this.requestApi('get', url, {}, {})
  }

  async getCollection (token, page = 1, limit = 50, search) {
    const url = `/collections?page=${page}&limit=${limit}`
    if (search !== undefined && search !== 'undefined' && search !== '') {
      return await this.requestApi('get', url + `&search=${search}`, {
        Authorization: `Bearer ${token}`
      })
    }

    return await this.requestApi('get', url, {
      Authorization: `Bearer ${token}`
    })
  }

  async getCollectionDetail (token, id) {
    return await this.requestApi('get', `/collections/${id}`, {
      Authorization: `Bearer ${token}`
    })
  }

  async getMangaDetail (token, id) {
    return await this.requestApi('get', `/mangas/${id}`, {
      Authorization: `Bearer ${token}`
    })
  }

  async adicionarMangaCollection (token, volume, mangaId, collectionId) {
    const data = {
      volume,
      manga: mangaId
    }

    if (collectionId !== null && collectionId !== undefined && collectionId !== '' && collectionId !== 'undefined' && collectionId !== 'null' && collectionId !== 0) {
      data.collection = collectionId
    }
    return await this.requestApi('post', '/collections-volumes', {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }, data)
  }
}

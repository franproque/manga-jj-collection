
import { BaseRepository } from './base-repository'
export class MangaApi extends BaseRepository {
  constructor () {
    super('https://mangajj.jjeanjacques.com')
  }

  async login (username, password) {
    return await this.requestApi('post', '/auth/login', {
      'Content-Type': 'application/json'
    }, {
      email: username,
      password
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

  async getMangaList (page, limit, search) {
    const url = `/manga?page=${page}&limit=${limit}`

    if (search) {
      return await this.requestApi('get', url + `&title=${search}`)
    }
    return await this.requestApi('get', url, {}, {})
  }
}

import axios from 'axios'
export class BaseRepository {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  async requestApi (method, url, headers, data) {
    return await axios({
      method,
      url: this.baseUrl + url,
      headers,
      data
    }).catch(error => {
      return {
        status: error.response.status,
        data: error.response.data,
        success: false
      }
    }).then(response => {
      return {
        status: response.status,
        data: response.data,
        success: true
      }
    })
  }
}

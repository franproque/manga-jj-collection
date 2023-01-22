import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()

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
      toast.error(error.response.data.message)
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

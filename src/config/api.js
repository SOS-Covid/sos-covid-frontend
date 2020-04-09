import axios from 'axios'

const api = axios.create({
  baseURL: process.env.baseURL
})

export default api

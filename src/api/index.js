import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: ''
})

export * from './session'
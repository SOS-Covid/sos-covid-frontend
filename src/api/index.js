import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://sos-covid-backend.herokuapp.com/'
})

export * from './session'
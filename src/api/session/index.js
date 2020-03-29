import { axiosInstance } from '../'

export const createSession = () => axiosInstance.get('/url')
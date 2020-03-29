import {axiosInstance} from '../../api'

export const auth = (data) => axiosInstance.post('/test', data)





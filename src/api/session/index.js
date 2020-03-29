import {axiosInstance} from '../../api'

export const auth = (data) => axiosInstance.post('/session', data)





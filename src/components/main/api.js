import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_BASE_URL_DEV
  : process.env.REACT_APP_BASE_URL

console.log('API => ', baseURL)

const portalApi = axios.create({
  baseURL: baseURL
})

portalApi.interceptors.response.use(
  res => (res.data ? res.data : res),
  (err) => {
    const status = (((err || {}).response || {}).status || null)
    if (status === 401 || status === 403) {
      // console.log(status)
      window.location.replace('/panel')
    }
    return Promise.reject(err)
  }
)

portalApi.interceptors.request.use((pConfig) => {
  const config = pConfig
  const token = localStorage.getItem('TOKEN')
  if (token) {
    config.headers.client_id = ''
    config.headers.authorization = token
  }
  // console.log(config.headers)
  return config
}, err => Promise.reject(err))

portalApi.defaults.headers.get['Content-Type'] = 'application/json'
portalApi.defaults.headers.post['Content-Type'] = 'application/json'
portalApi.defaults.headers.patch['Content-Type'] = 'application/json'
portalApi.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
portalApi.defaults.headers.patch['Access-Control-Allow-Origin'] = '*'
portalApi.defaults.headers.post['authorization'] = localStorage.getItem('TOKEN')

export default portalApi

import axios, { AxiosInstance } from 'axios'
import { HmacSHA256 } from 'crypto-js'
import { useTokenStore } from '@/stores/token'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

apiClient.interceptors.request.use((config) => {
  const tokenStore = useTokenStore()
  const timestamp = Math.floor(Date.now() / 1000)
  const signature = HmacSHA256(`${timestamp}${config.url}`, tokenStore.globalToken)

  config.headers['X-Token'] = tokenStore.globalToken
  config.headers['X-Timestamp'] = timestamp
  config.headers['X-Signature'] = signature.toString()

  return config
})

export default apiClient

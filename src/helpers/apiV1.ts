import { API_HOST } from '@env'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const apiV1 = axios.create({ 
  baseURL: `${API_HOST}/v1`,
})

apiV1.interceptors.request.use(async function (config) {
  // Do something before request is sent

  try {
    const accessToken = await AsyncStorage.getItem('@storage_accessToken')
    if(accessToken !== null) {
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + accessToken
      }
      else {
        config.headers = {
          Authorization: 'Bearer ' + accessToken
        }
      }
    }
  } catch(e) {
    console.log(e)
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

apiV1.interceptors.response.use(function (response) {
  // Do something with response data
  response.data = (response.data).data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default apiV1
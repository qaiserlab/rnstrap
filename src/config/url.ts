import { API_HOST } from '@env'

export default {
  apiHost: (!API_HOST)?'http://localhost:4321':API_HOST
}
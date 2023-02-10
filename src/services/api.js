import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-backend-mr3d.onrender.com'
})

import axios from 'axios'

// Create axios instance
const service = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000, // Request timeout
})

export default service

import axios from 'axios'
import store from "../store";

// Create axios instance
const service = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000, // Request timeout
})

// Request interceptor
service.interceptors.request.use(
  config => {
    const token = store.getters['user/accessToken'];
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token; // Set JWT token
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    if (response.headers.authorization) {
      store.dispatch('user/setToken', response.headers.authorization)
      response.data.token = response.headers.authorization;
    }

    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service

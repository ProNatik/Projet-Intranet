import axios from "axios";
import * as Storage from '../services/storage';

const instance = axios.create({
    baseURL: 'http://localhost:7000/api/',
  });

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = Storage.getTokenStorage();
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export default instance
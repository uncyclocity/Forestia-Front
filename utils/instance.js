const axios = require('axios');
const { default: domain } = require('../config/domain');

const instance = axios.create({
  baseURL: domain.back,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.defaults.withCredentials = true;

const setProgress = (value) => {
  typeof window !== 'undefined' && window.progressbarChange(value);
};

instance.interceptors.request.use(
  (config) => {
    setProgress(10);
    return config;
  },
  (error) => {
    setProgress(100);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    setProgress(100);
    return response;
  },
  (error) => {
    setProgress(100);
    return Promise.reject(error);
  },
);

module.exports = instance;

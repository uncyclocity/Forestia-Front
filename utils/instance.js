const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.forestia.me',
  headers: {
    'Content-Type': 'application/json',
  },
});

const setProgress = (value) => {
  typeof window !== 'undefined' && window.progressbarChange(value);
};

instance.interceptors.request.use(
  (config) => {
    setProgress(10);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    setProgress(100);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

module.exports = instance;

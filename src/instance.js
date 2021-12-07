const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://146.56.105.130:3050',
  headers: {
    'Content-Type': 'application/json',
  },
});

let progress = 0;
let timerId = null;

const setProgress = (value) => {
  progress = value;
  typeof window !== 'undefined' && window.progressbar.onChange(progress);
};

const timer = () => {
  if (progress < 98) {
    const diff = 100 - progress;
    const inc = diff / (10 + progress * (1 + progress / 100));
    setProgress(progress + inc);
  }
  timerId = setTimeout(timer, 50);
};

instance.interceptors.request.use(
  (config) => {
    setProgress(0);
    timer();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    setProgress(100);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

module.exports = instance;

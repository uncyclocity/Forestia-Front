const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:9229',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;

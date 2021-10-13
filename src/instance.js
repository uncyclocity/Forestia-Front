const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://forestia.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;

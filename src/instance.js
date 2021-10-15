const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://forestia.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;

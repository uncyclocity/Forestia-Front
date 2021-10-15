const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://forestia.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = instance;

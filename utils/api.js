const axios = require('axios')
var queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
const api = {
  getUser(username) {
    axios
    .get(queryUrl)
  }
};

module.exports = api;

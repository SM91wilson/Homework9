const axios = require('axios')
var queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
const api = {
  getUser(username) {
    axios
    .get(queryUrl)
    .then(function(userData){
      console.log(userData.data)
    })
  }
};

module.exports = api;

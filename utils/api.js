const axios = require('axios')

const api = {
  // defining the function that gets the user data
  async getUser(user) {
    // calls the axios and returns the information
    return axios
    // building the url with the user argument
    .get(`https://api.github.com/users/${user}`)
  }};

module.exports = api;

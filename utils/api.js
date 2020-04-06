const axios = require('axios')

const api = {
  // defining the function that gets the user data
  async getUser(user) {
    // calls the axios 
    await axios
    // building the url with the user argument
    .get(`https://api.github.com/users/${user}`)
    .then(function(response){
      // getting the response data
      console.log(response.data.avatar_url)
      console.log(response)
    })
    
    // to catch any error and console log error
    .catch((err) =>{
      console.log("error")
    })
}};

module.exports = api;

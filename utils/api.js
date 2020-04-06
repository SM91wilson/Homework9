const axios = require('axios')

const api = {
  async getUser(user) {
    await axios
    .get(`https://api.github.com/users/${user}`)
    .then(function(response){
      console.log(response.data.avatar_url)
    })
    
    .catch((err) =>{
      console.log("error")
    })
}};

module.exports = api;

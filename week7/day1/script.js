let axios = require('axios');

let users = async ()=>{

    let respons = await axios.get('https://jsonplaceholder.typicode.com/users')
     return respons.data

}

module.exports= {
    users
}
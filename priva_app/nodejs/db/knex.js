const db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : '5432',
      user : 'postgres',
      password : '0523157737',
      database : 'priva'
    }
  });


  const getOwners = ()=>{
     return db('privaowners')
       .select('*')
       .from('privaowners')
       
  }

 module.exports = {
   getOwners
  }
 

 


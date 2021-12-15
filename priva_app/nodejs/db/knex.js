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


const getIdOwner = ()=>{
  return db('privaowners')
  .where('owner_id' ,11 )
  
  
}


  const getOwners = ()=>{
     return db('privaowners')
       .select('*')
       .from('privaowners')
       
  }


 const setOwners = ({FirstName,LastName,address,Starttime,Endtime,number,sentence,url,select})=>{
    return db("privaowners")
    .insert([{name_of_business_owner:FirstName ,lastname_of_business_owner:LastName , address: address ,activity_time:Starttime ,activity_time_end:Endtime, phone:number , business_opening_sentence:sentence,address_home_page: url  ,category_of_business_owner:select}])
    .returning("*")
  }

 module.exports = {
   getOwners,
   setOwners
  }
 

 


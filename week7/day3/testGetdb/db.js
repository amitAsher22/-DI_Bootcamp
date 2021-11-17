
let knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '0523157737',
      database : 'treeTable',
      port: 5432
    }
  });





async function getBook (){
  const books = await knex.select('*').from('book')
  return books
    

}

async function getOnlyAlic(){
 const bookAlic = await knex.select('*')
     .from('book')
    .where({book_title : 'Alice'})
    
    return bookAlic
}

async function insertData(){
    let newData = await knex.select('*')
    .from('book')
    .insert({book_id:10 , book_title:'harry poter' , book_author:'amit asher'})
    return newData
}

async function updateAlic(){
    const updatRow = await knex.select('*')
    .from('book')
    .where('book_title' , 'Alice')
    .update({book_title : 'updateAlice'})
    return updatRow
}

async function deleteAlice(){
    const deleteRow = await knex.select('*')
    .from('book')
    .where('book_title' , 'updateAlice')
    .del('*' )
    return deleteRow
}

  module.exports = {
     getBook,
     getOnlyAlic,
     insertData,
     updateAlic,
     deleteAlice
  }
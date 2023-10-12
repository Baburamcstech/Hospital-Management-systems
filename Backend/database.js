var mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    database:'Hospital',
    user:'root',
    password:'Babus@2005'
})
module.exports=connection;
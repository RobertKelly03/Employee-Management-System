const mysql = require('mysql');
module.exports = mysql.createConnection({
    host: "localhost",
    port: 3306,

    
    user: 'root',

    password: 'root1234',
    database: 'employee_db'
  });
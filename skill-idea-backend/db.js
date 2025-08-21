const mysql = require('mysql2/promise');

// Create a pool for connections
const pool = mysql.createPool({
  host: 'localhost',      // or your MySQL host
  user: 'root',           // your MySQL username
  password: 'pass', // your MySQL password
  database: 'skill_ai',   
  port: 3306
   // the database you just created
});

module.exports = pool;

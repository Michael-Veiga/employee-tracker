// require 'mysql'
var mysql = require("mysql");
// require dotenv
require("dotenv").config();

const connection = mysql.createConnection({
  // host - localhost
  host: process.env.DB_HOST,
  // port
  port: process.env.DB_PORT,
  // user
  user: process.env.DB_PASSWORD,
  // password
  password: process.env.DB_PASSWORD,
  // database name
  database: process.env.DB_NAME,
});

connection.connect();

module.export = connection;

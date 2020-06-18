// require 'mysql'
const mysql = require("mysql");
const util = require("util");
// require dotenv
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "admin",
  password: "new_password",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  else console.log("You're connected");
});
connection.query = util.promisify(connection.query);
module.exports = connection;

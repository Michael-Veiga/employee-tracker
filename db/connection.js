// require 'mysql'

const connection = mysql.createConnection({
  // host - localhost
  // user
  // password
  // database name
});

connection.connect();

module.export = connection;

const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  createDepartments() {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  createEmployee() {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  createRole() {
    return this.connection.query("INSERT INTO role SET ?", role);
  }
  findDepartments() {
    return this.connection.query("SELECT * FROM department");
  }
  findEmployees() {
    return this.connection.query("SELECT * FROM employee");
  }
  findRole() {
    return this.connection.query(
      "SELECT first_name, last_name FROM role",
      role
    );
  }
}

module.exports = new Database(connection);

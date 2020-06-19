const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  createDepartments(department) {
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
    return this.connection.query("SELECT * FROM roles");
  }
}

module.exports = new Database(connection);

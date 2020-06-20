const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  createDepartments(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  createRole(roles) {
    return this.connection.query("INSERT INTO roles SET ?", roles);
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

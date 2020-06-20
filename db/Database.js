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
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id;"
    );
  }
  findRole() {
    return this.connection.query(
      "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department ON roles.department_id = department.id"
    );
  }
  updateEmployeeRole(employeeID, roleID) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE ID = ?",
      [roleID, employeeID]
    );
  }
}

module.exports = new Database(connection);

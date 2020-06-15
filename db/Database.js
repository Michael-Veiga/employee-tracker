const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  createDepartments() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
  createEmployee() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
  createRole() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
  getDepartments() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
  getEmployee() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
  getRole() {
    return this.connection
      .query
      // select table that you want to access
      ();
  }
}

// require inquirer and console.table
const { prompt } = require("inquirer");
// require the Database class
const Database = require("./db/Database");
// require console.table
const cTable = require("console.table");

// create a prompt when the app is started
// this will ask the user what they'd like to do
async function runSearch() {
  const { choice } = await prompt({
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      "VIEW_EMPLOYEES_DB",
      "VIEW_DEPARTMENT",
      "VIEW_ROLES",
      "ADD_EMPLOYEE",
      "ADD_DEPARTMENT",
      "ADD_ROLES",
      "EXIT",
    ],
  });
  switch (choice) {
    case "VIEW_EMPLOYEES_DB":
      return getEmployees();
    case "VIEW_DEPARTMENT":
      return getDepartments();
    case "EXIT":
      connection.end();
      break;
  }
}

// if the user selects to view employees, its going to call the getEmployees function down below
// call the findEmployees function from the database class that we created

async function getEmployees() {
  const findEmployeeInfo = await Database.findEmployees();
  console.table(findEmployeeInfo);
}

async function getDepartments() {
  const findDepartmentInfo = await Database.findDepartments();
  console.table(findDepartmentInfo);
}

runSearch();

// require inquirer
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
      {
        name: "Show me all the employees",
        value: "VIEW_EMPLOYEE",
      },
      {
        name: "Show me all the departments",
        value: "VIEW_DEPARTMENT",
      },
      {
        name: "Show me all the roles",
        value: "VIEW_ROLES",
      },
      {
        name: "Add an employee",
        value: "ADD_EMPLOYEE",
      },
      {
        name: "Add a department",
        value: "ADD_DEPARTMENT",
      },
      {
        name: "Add a role",
        value: "ADD_ROLES",
      },
      {
        name: "Exit",
        value: "EXIT",
      },
    ],
  });
  // if the user selects to view employees, its going to call the getEmployees function down below
  switch (choice) {
    case "VIEW_EMPLOYEE":
      // return the getEmployees function to add case to
      return getEmployees();
    case "VIEW_DEPARTMENT":
      return getDepartments();
    case "VIEW_ROLES":
      return getRoles();
    case "ADD_EMPLOYEE":
      return addEmployees();
    case "ADD_DEPARTMENT":
      return addDepartments();
    case "EXIT":
      connection.end();
      break;
  }
}

// call the findEmployees function from the database class that we created

async function getEmployees() {
  const findEmployeeInfo = await Database.findEmployees();
  console.table(findEmployeeInfo);
}

async function getDepartments() {
  const findDepartmentInfo = await Database.findDepartments();
  console.table(findDepartmentInfo);
}

async function getRoles() {
  const findRoleInfo = await Database.findRole();
  console.table(findRoleInfo);
}

async function addDepartments() {
  const department = await prompt([
    {
      name: "name",
      message: "Enter the name of the department",
    },
  ]);

  await Database.createDepartments(department);
  console.log(`The ${department.name} has been added`);
}
runSearch();

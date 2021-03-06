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
        name: "Update an employees role",
        value: "UPDATE_EMPLOYEE_ROLES",
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
      // return the getEmployees function to select the query
      return getEmployees();
    case "VIEW_DEPARTMENT":
      return getDepartments();
    case "VIEW_ROLES":
      return getRoles();
    case "ADD_EMPLOYEE":
      return addEmployees();
    case "ADD_DEPARTMENT":
      return addDepartments();
    case "ADD_ROLES":
      return addRoles();
    case "UPDATE_EMPLOYEE_ROLES":
      return updateEmployeeRoles();
    default:
      "EXIT";
      return process.exit();
  }
}

// call the findEmployees function from the database class

async function getEmployees() {
  const findEmployeeInfo = await Database.findEmployees();
  // console.table the employees names, titles, department, and salary.
  console.table(findEmployeeInfo);

  runSearch();
}

async function getDepartments() {
  const findDepartmentInfo = await Database.findDepartments();
  console.table(findDepartmentInfo);

  runSearch();
}

async function getRoles() {
  const findRoleInfo = await Database.findRole();
  console.table(findRoleInfo);

  runSearch();
}

async function addEmployees() {
  const employee = await prompt([
    {
      name: "first_name",
      message: "Enter employees first name",
    },
    {
      name: "last_name",
      message: "Enter employees last name",
    },
  ]);

  const findRoleInfo = await Database.findRole();

  const findRole = findRoleInfo.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleID } = await prompt({
    type: "list",
    name: "roleID",
    message: "Select employees role",
    choices: findRole,
  });

  employee.role_id = roleID;

  await Database.createEmployee(employee);
  console.log(`${employee.first_name} ${employee.last_name} has been added`);

  runSearch();
}

async function addDepartments() {
  const department = await prompt([
    {
      name: "name",
      message: "Enter the name of the department",
    },
  ]);

  await Database.createDepartments(department);
  console.log(`The ${department.name} department has been added`);

  runSearch();
}

async function addRoles() {
  const findDepartmentInfo = await Database.findDepartments();
  // search for all existing departments
  // use map() to loop through the array of departments and return the matching id
  const findDepartment = findDepartmentInfo.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  // prompt the user for role title, salary and department info
  const roles = await prompt([
    {
      name: "title",
      message: "Enter the role title",
    },
    {
      name: "salary",
      message: "Enter the role salary",
    },
    {
      type: "list",
      name: "department_id",
      message: "Select which department the role reports to",
      choices: findDepartment,
    },
  ]);

  await Database.createRole(roles);
  console.log(`The ${roles.title} role has been added`);
  // restart search
  runSearch();
}

async function updateEmployeeRoles() {
  const findEmployeeInfo = await Database.findEmployees();
  // use map() to loop through the array of employees and return the matching id
  const findEmployee = findEmployeeInfo.map(
    ({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    })
  );

  const { employeeID } = await prompt([
    {
      type: "list",
      name: "employeeID",
      message: "Select the employee whose role you want to change",
      choices: findEmployee,
    },
  ]);

  const findRoleInfo = await Database.findRole();

  const findRole = findRoleInfo.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleID } = await prompt([
    {
      type: "list",
      name: "roleID",
      message: "Select the employees new role",
      choices: findRole,
    },
  ]);

  await Database.updateEmployeeRole(employeeID, roleID);

  console.log("Employees role has been updated");

  runSearch();
}

runSearch();

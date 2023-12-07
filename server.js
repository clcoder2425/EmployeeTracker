const inquirer = require("inquirer");
const mysql = require("mysql2");
const cfonts = require('cfonts');

// create a MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Welcome1",
    database: "employeeTracker_db",
});

// connect to the database
connection.connect((err) => {
    try {
     console.log("Connected to the database!");
     // start the application
     start();
    } catch (err) {
     console.log("Unable to connect to the database");
    }
 });
 
 // Function to start the application of CFONT 
 cfonts.say('TL, Inc \nSQL Employee Tracker', {
     font: 'block',                  // define the font face
     align: 'center',               // define text alignment
     colors: ['system'],            // define all colors
     background: 'transparent',   // define the background color, you can also use `backgroundColor` here as key
     letterSpacing: 1,           // define letter spacing
     lineHeight: 0.3,           // define the line height
     space: true,              // define if the output text should have empty lines on top and on the bottom
     maxLength: '0',                 // define how many character can be on one line
     gradient: false,               // define your two gradient colors
     independentGradient: false,   // define if you want to recalculate the gradient for each new line
     transitionGradient: false,   // define if this is a transition between colors directly
     env: 'node'                 // define the environment cfonts is being executed in
 });

 // Function to Start  SQL Employee Tracker Application
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Add a Manager",
                "Update an employee role",
                "View Employees by Manager",
                "View Employees by Department",
                "Delete Departments | Roles | Employees",
                "View the total utilized budget of a department",
                "Exit",
            ],
        })
        .then((answer) => {

            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Add a Manager":
                    addManager();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "View Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "View Employees by Department":
                    viewEmployeesByDepartment();
                    break;
                case "Delete Departments | Roles | Employees":
                    deleteDepartmentsRolesEmployees();
                    break;
                case "View the total utilized budget of a department":
                    viewTotalUtilizedBudgetOfDepartment();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Thank you for your visit!");
                    break;
            }
        });
}

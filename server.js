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
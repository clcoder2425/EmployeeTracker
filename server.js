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
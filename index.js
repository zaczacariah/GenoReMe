const fs = require('fs');
const inq = require('inquirer');


inq
  .prompt([
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'github',
    }
  ])
  .then((data) => {

  

  });

 

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

  //  fs.writeFile('readme.md', content, (err) =>
  //  err ? console.error(err) : console.log('Success!'));
//}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

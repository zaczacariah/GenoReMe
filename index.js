const fs = require('fs');
const inq = require('inquirer');
const License = require('./License.js');

inq
  .prompt([
    {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your Project Name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What command should be run to install dependencies?',
    name: 'insDep',
  },
  {
    type: 'input',
    message: 'What command should be run to run tests?',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Outline the installation instructions.',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Outline the Usage of this app.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Did anyone else contribute to this project?',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'Choose Licence.',
    choices: [
      {
        name: 'Apache License 2.0',
        value: 'apache',
      },
      {
        name: 'GNU v3.0',
        value: 'gnu',
      },
      {
        name: 'BSD 2',
        value: 'bsd2',
      },
      {
        name: 'BSD 3',
        value: 'bsd3',
      },
      {
        name: 'MIT License',
        value: 'mit',
      }
    ],
    name: 'license',
  },
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

const fs = require('fs');
const inq = require('inquirer');
const License = require('./License.js');


function init(){

// Begin prompts
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
        message: 'Provide a brief description of the project',
        name: 'desc',
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

    let license = new License(data.license); // Create new License with the type specified in prompts
    let licenseMarkdown = license.generateMarkdown(); // Generate markdown for license section

    // Create content 
    const content = `
# ${data.name}
![License: ${license.name}](${license.svg})

## Description

${data.desc}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.install}

How do I install Dependencies?
${data.insDep}

## Usage

${data.usage}

## Credits

${data.credits}


${licenseMarkdown}

## Tests

How do I run tests?
${data.test}

## Questions

Please direct your questions towards Ben at:
Github: ${data.github}
Email: ${data.email}

    `
      // Write to file called readme.md
    writeToFile('readme.md', content);// Write the content to file 

    });

} 
init(); //Run init

// Write to file function
function writeToFile(fileName, data) {

   fs.writeFile(fileName, data, (err) =>
   err ? console.error(err) : console.log('Success!'));
}


const fs = require("fs");
const path = require('path'); // path module provides utility functions for working with file and dir paths - path.join or path.normalize??? better this than working with strings
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // assume this is the html 

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please add a name to your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, add a short description:',
    },
    // {
    //     type: 'checkbox',
    //     name: 'tableOfContent',
    //     message: 'Please choose your table of content:',
    //     choices: ['Description', 'Installation', 'Usage', 'Licence', 'Contributing', 'Tests', 'Questions', 'Sources', 'Author']
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log('generatedReadme.md file is generated') )
    // return fs.writeFile(path.join('./'), fileName, data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(responses => 
        {writeToFile('./generated.md', generateMarkdown({...responses}))})
    // .then(writeToFile())

}

// function call to initialize program
init();

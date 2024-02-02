const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please add a name to your project:',
    },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Please, add a short description:',
    // },
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
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

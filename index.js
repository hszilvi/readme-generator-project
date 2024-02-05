const fs = require("fs");
const path = require('path'); // path module provides utility functions for working with file and dir paths - path.join or path.normalize??? better this than working with strings
// need an output folder where there will be a generated readme
// const badge = require('badge-maker');
// const format = {
//   label: 'build',
//   message: 'passed',
//   labelColor: '#555',
//   color: '#4c1',
//   style: 'flat'
// }
// const svg = badge(format);
// console.log(svg);
// console.log('fs' + fs)
// console.log('path' + path)
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // assume this is the html 

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please add a name to your project:',
        validate: titleUserInput => {
            // (gitHubUserInput) ? true : console.log('answer')
            if (titleUserInput) {
                return true;
            } else {
                console.log('Add a name to your project:')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, add a short description:',
        validate: descriptionUserInput => {
            // (gitHubUserInput) ? true : console.log('answer')
            if (descriptionUserInput) {
                return true;
            } else {
                console.log('Add a short description to your readme file:')
            }
        }
    },
    // {
    //     type: 'checkbox',
    //     name: 'tableOfContent',
    //     message: 'Please choose your table of content:',
    //     choices: ['Description', 'Installation', 'Usage', 'Licence', 'Contributing', 'Tests', 'Questions', 'Sources', 'Author']
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instruction for installation!'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add usage of your repo!'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licence do you want to add to your readme?',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Boost Software License', 'Creative common Zero', 'Eclipse Publik Licence', 'No license'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Plase add contributing info to your readme!',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Plase add tests information to your readme file!',
    },
    {
        type: 'input',
        name: 'gitUser',
        message: 'Add your github username:',
        validate: gitHubUserInput => {
            // (gitHubUserInput) ? true : console.log('answer')
            if (gitHubUserInput) {
                return true;
            } else {
                console.log('Add your github username!')
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add your contact email address:',

    }

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
        {writeToFile('./output/generated.md', generateMarkdown({...responses}))})
    // .then(writeToFile())

}

// function call to initialize program
init();

const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); 

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please add a name to your project:',
        validate: titleUserInput => {
            if (titleUserInput) {
                return true;
            } else {
                console.log('(Project name is compulsory!)')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, add a short description:',
        validate: descriptionUserInput => {
            if (descriptionUserInput) {
                return true;
            } else {
                console.log('(Description is compulsory!)')
            }
        }
    },
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
            if (gitHubUserInput) {
                return true;
            } else {
                console.log('Github username is compulsory!')
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
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(responses => 
        {writeToFile('./output/generated.md', generateMarkdown({...responses}))})
}

// function call to initialize program
init();

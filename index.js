const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
{
    type: 'input',
    message: 'Enter Username',
    name: 'username'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'project-title'
},
{
    type: 'input',
    message: 'Give a brief description of your project',
    name: 'project-description'
},
{
    type: 'input',
    message: 'How do you install?',
    name: 'installation'
},
{
    type:'input',
    message: 'Who contributed to the project?',
    name: 'contributers'
}

];


function writeToFile(fileName, data) {
}

function init() {
    inquirer
        .prompt(questions)
        .then(function(answers){
            api
            .getUser(answers.username)
            .then()
        })
}

init();

const inquirer = require("inquirer");

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
}

];

inquirer
    .prompt(questions)
    .then
function writeToFile(fileName, data) {
}

function init() {

}

init();

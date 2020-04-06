const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
    type: 'input',
    message: 'Enter Username',
    name: 'username'
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle'
},
{
    type: 'input',
    message: 'Give a brief description of your project',
    name: 'projectDescription'
},
{
    type: 'input',
    message: 'Give a brief description of how to use your project',
    name: 'usage'
},
{
    type: 'input',
    message: 'How do you install?',
    name: 'installation'
},
{
    type: 'input',
    message: 'How would test your project?',
    name:'test'
},
{
    type:'input',
    message: 'Who contributed to the project?',
    name: 'contributers'
},
{
    type: 'list',
    message: 'What license is this project under?',
    name: 'license',
    choices: ['MIT', 'GPL', 'GPLv3', 'CC--0']
}

];


function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

async function init() {
   inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            console.log(answers.username);
            
            api
            .getUser(answers.username)
            .then(function (data){
                writeToFile("README.md", generateMarkdown({...answers, ...data}))
            })
            }
        ).catch(e => {
            console.log(e);
        })
}

init();

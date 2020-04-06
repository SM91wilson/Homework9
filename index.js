const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown');

// questions to ask the user to generate the readme, username is used to search for a particular user, other questions are used to populate the readme
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

// function for writing the readme file, accepts the name of the file and the data that will populate it
function writeToFile(fileName, data) {
    // path.join creates a working file path and process.cwd allows it to be made in the current directory
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

async function init() {
    // calling inquirer to gather the answers from the questions using prompts in the terminal
   inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            
            // calling the api module from api.js using the username answer from the inquirer
            api
            .getUser(answers.username)
            .then(function (res){
                // using the spread operator to iterate through the information from the inquirer and axios
                writeToFile("README.md", generateMarkdown({...answers, ...res}))
            })
            }
        ).catch(e => {
            console.log(e);
        })
}

init();

function generateMarkdown(answers, res) {
  return `
  
# ${answers.projectTitle}

## Contents

- [Description](#Description)
- [License](#License)
- [Usage](#Usage)
- [Installation](#Installation)
- [Testing](#Testing)
- [Contributers](#Contributers)
- [Questions](#Questions)

## Description

${answers.projectDescription}

## License

${licenseBadge(answers.license)}
This project is under a ${answers.license} license

## Usage

${answers.usage}

## Installation

Instructions for installing:
${answers.installation}

## Testing

Instructions for running tests:

${answers.test}

## Contributers

${answers.contributers}

## Questions


`;
}

function licenseBadge(license){
  return `[![MIT license](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

module.exports = generateMarkdown;

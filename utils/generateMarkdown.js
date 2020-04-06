function generateMarkdown(answers, data) {
  return `
# ${answers.projectTitle}

## Contents

[Description](##-Description)
[License](##-License)
[Usage](##-Usage)
[Installation]##-Installation
[Testing]##-Testing
[Contributers]##-Contributers
[Questions]##-Questions

## Description
${answers.projectDescription}

## License
${licenseBadge(answers.license)}


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

[!user avatar](${data.avatar_url})
`;
}

function licenseBadge(license){
  `[![MIT license](https://img.shields.io/badge/License-${license}-blue.svg)]`
}

module.exports = generateMarkdown;
